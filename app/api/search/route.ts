import { getUniqueByContent } from "@/content/docs/helpers/searchIndex";
import { source } from "@/lib/source";
import { createSearchAPI } from "fumadocs-core/search/server";


export const { staticGET: GET } = createSearchAPI("advanced", {
  language: "english",
  indexes: source.getPages().map((page) => {
    return {
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      id: page.url,
      structuredData: {
        headings: page.data.structuredData.headings,
        contents: getUniqueByContent(page.data.structuredData.contents),
      },
    };
  }),
});

export const revalidate = false;
