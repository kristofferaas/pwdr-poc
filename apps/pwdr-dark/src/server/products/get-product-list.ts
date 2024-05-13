import { graphql, FragmentOf } from "../graphql";
import { crystallize } from "../crystallize";
import { Product, ProductList, productListSchema } from "./product-schema";
import { Locale } from "@/lib/i18n";

export async function getProductList(
  path: string,
  options: { locale: Locale }
) {
  const result = await crystallize.query(ProductListQuery, {
    language: options.locale,
    path,
  });

  const products: unknown[] = [];

  for (const productOrFolder of result.catalogue?.children || []) {
    if (productOrFolder.type === "folder") {
      const folder = productOrFolder;
      const components = "components" in folder ? folder.components : [];

      const imagesComponent = components?.find((c) => c.type === "images");
      const images =
        imagesComponent &&
        "content" in imagesComponent &&
        imagesComponent.content?.__typename === "ImageContent"
          ? imagesComponent.content.images
          : null;


      products.push({
        id: folder.id,
        name: folder.name,
        path: folder.path,
        images: images?.map((img) => img.url) || [],
      });
    }
    if (productOrFolder.type === "product") {
      const product = productOrFolder;
      const components = "components" in product ? product.components : [];
      const variants = "variants" in product ? product.variants : [];

      // Get images from the first variant
      const images = variants?.at(0)?.images?.map((img) => img.url) || [];

      // Get price from the first variant
      const price = variants?.at(0)?.price;

      const descriptionComponent =
        components?.find((c) => c.id === "description")?.content || {};

      const description =
        ("paragraphs" in descriptionComponent
          ? descriptionComponent.paragraphs?.[0]?.body?.plainText
          : []
        )?.join(" ") || "";

      products.push({
        id: product.id,
        name: product.name,
        path: product.path,
        price,
        images,
        description,
      });
    }
  }

  return productListSchema.parse(products);
}

const ProductListQuery = graphql(`
  query ProductListQuery($language: String!, $path: String!) {
    catalogue(language: $language, path: $path) {
      children {
        id
        name
        path
        type
        ... on Product {
          ...product
          topics {
            path
            name
          }
        }
        ... on Folder {
          components {
            ...component
          }
        }
      }
    }
  }

  fragment content on ComponentContent {
    ...boolean
    ...singleLine
    ...richText
    ...imageContent
    ...paragraphCollection
    ...itemRelations
    ...gridRelations
    ...location
    ...propertiesTable
    ...dateTime
    ...videoContent
    ...numeric
    ...selection
    ...file
  }

  fragment component on Component {
    id
    name
    type
    content {
      ...content
      ...componentChoice
      ...contentChunk
    }
  }

  fragment dateTime on DatetimeContent {
    datetime
  }

  fragment gridRelations on GridRelationsContent {
    grids {
      id
      name
    }
  }

  fragment imageContent on ImageContent {
    __typename
    images {
      ...image
    }
  }

  fragment image on Image {
    url
    altText
    key
    variants {
      url
      width
      key
    }
  }

  fragment itemRelations on ItemRelationsContent {
    items {
      id
      name
      path
    }
    productVariants {
      sku
      name
    }
  }

  fragment location on LocationContent {
    lat
    long
  }

  fragment paragraphCollection on ParagraphCollectionContent {
    paragraphs {
      body {
        ...richText
      }
    }
  }

  fragment product on Product {
    id
    name
    type
    language
    path

    components {
      ...component
    }

    variants {
      name
      sku
      components {
        ...component
      }
      price
      priceVariants {
        identifier
        name
        price
        currency
      }
      stockLocations {
        identifier
        name
        stock
      }
      isDefault
      images {
        url
        altText
        key

        variants {
          key
          width
          url
        }
      }

      subscriptionPlans {
        identifier
        name
        periods {
          id
          name
          initial {
            priceVariants {
              identifier
              name
              price
              currency
            }
          }
          recurring {
            priceVariants {
              identifier
              name
              price
              currency
            }
          }
        }
      }
    }

    vatType {
      name
      percent
    }
  }

  fragment propertiesTable on PropertiesTableContent {
    sections {
      ... on PropertiesTableSection {
        title
        properties {
          key
          value
        }
      }
    }
  }

  fragment richText on RichTextContent {
    plainText
  }

  fragment boolean on BooleanContent {
    value
  }

  fragment singleLine on SingleLineContent {
    text
  }

  fragment videoContent on VideoContent {
    videos {
      ...video
    }
  }

  fragment video on Video {
    id
    playlists
    title
    thumbnails {
      ...image
    }
  }

  fragment numeric on NumericContent {
    number
    unit
  }

  fragment componentChoice on ComponentChoiceContent {
    selectedComponent {
      id
      name
      type
      content {
        ...content
      }
    }
  }

  fragment contentChunk on ContentChunkContent {
    chunks {
      id
      name
      type
      content {
        ...content
      }
    }
  }

  fragment selection on SelectionContent {
    options {
      key
      value
    }
  }

  fragment file on FileContent {
    files {
      url
      key
      title
      size
    }
  }
`);
