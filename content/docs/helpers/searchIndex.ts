import { StructuredData } from "fumadocs-core/mdx-plugins";

export function getUniqueByContent(items: StructuredData['contents'])  {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.content)) {
      return false;
    }
    seen.add(item.content);
    return true;
  });
}