import { generateFiles } from "fumadocs-openapi";
import { openapi } from "../lib/openapi.ts";

void generateFiles({
  input: openapi,
  output: "./content/docs",
  index: {
    // for generating `href`
    url: {
      baseUrl: "/docs",
      contentDir: "./content/docs",
    },
    items: [
      {
        path: "index.mdx",
        // optional: set frontmatter
        description: "All available pages",
      },
    ],
  },
  // we recommend to enable it
  // make sure your endpoint description doesn't break MDX syntax.
  includeDescription: true,
  per: "operation",
  groupBy: "tag",
});
