import { graphql } from "../graphql";
import { crystallize } from "../crystallize";
import { productSchema } from "./product-schema";

export async function getProduct(path: string) {
  const result = await crystallize.query(ProductQuery, {
    language: "en",
    path,
  });

  const product = result.catalogue;

  if (!product) {
    throw new Error("Product not found");
  }

  const components = "components" in product ? product.components : [];
  const variants = "variants" in product ? product.variants : [];

  // Get images from the first variant
  const images = variants?.at(0)?.images?.map((img) => img.url) || [];

  const descriptionComponent =
    components?.find((c) => c.id === "description")?.content || {};

  const description =
    ("paragraphs" in descriptionComponent
      ? descriptionComponent.paragraphs?.[0]?.body?.plainText
      : []
    )?.join(" ") || "";

  return productSchema.parse({
    id: product.id,
    name: product.name,
    path: product.path,
    images,
    description,
  });
}

const ProductQuery = graphql(`
  query ProductQuery($language: String!, $path: String!) {
    catalogue(language: $language, path: $path) {
      id
      name
      path
      ... on Product {
        ...product
        topics {
          path
          name
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
      title {
        ...singleLine
      }
      body {
        ...richText
      }
      images {
        ...image
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
    json
    html
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
