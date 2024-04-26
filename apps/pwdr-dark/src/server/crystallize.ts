import { ResultOf, TadaDocumentNode, VariablesOf } from "gql.tada";
import { print } from "@0no-co/graphql.web";
import { cache } from "react";

const createCatalogueURL = (tenantIdentifier: string) =>
  new URL(`${tenantIdentifier}/catalogue`, "https://api.crystallize.com/");

type CrystallizeClientOptions = {
  tenantId: string;
  tenantIdentifier: string;
};

function createCryzstallizeClient(options: CrystallizeClientOptions) {
  const catalogueURL = createCatalogueURL(options.tenantIdentifier);

  const baseFetch = async (query: any, variables?: any) => {
    const response = await fetch(catalogueURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: print(query),
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from Crystallize");
    }

    return response.json();
  };

  // Type safe query function
  const query = async <
    TData extends TadaDocumentNode<any, any>,
    Variables extends VariablesOf<TData>,
  >(
    query: TData,
    variables?: Variables
  ): Promise<ResultOf<TData>> => {
    const response = await baseFetch(query, variables);
    return response.data;
  };

  return {
    query: cache(query),
  };
}

export const crystallize = createCryzstallizeClient({
  tenantId: process.env.CRYSTALLIZE_TENANT_ID as string,
  tenantIdentifier: process.env.CRYSTALLIZE_TENANT_IDENTIFIER as string,
});
