import { Locale } from "@/lib/i18n";
import { crystallize } from "../crystallize";
import { graphql } from "../graphql";

export async function getContent(path: string, options: { locale: Locale }) {
  const result = await crystallize.query(StructureQuery, {
    language: options.locale,
    path,
  });

  console.log("path", path);
  console.log("catalogue", result.catalogue);

  if (
    !result.catalogue ||
    !result.catalogue.id ||
    !result.catalogue.name ||
    !result.catalogue.type ||
    !result.catalogue.path
  ) {
    throw new Error("Content not found");
  }

  return {
    id: result.catalogue.id,
    name: result.catalogue.name,
    type: result.catalogue.type,
    path: result.catalogue.path,
  };
}

const StructureQuery = graphql(`
  query StructureQuery($language: String!, $path: String!) {
    catalogue(language: $language, path: $path) {
      id
      name
      type
      path
    }
  }
`);
