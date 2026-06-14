/** Strip .md / .mdx extension from a content collection entry id for use in URLs. */
export function entrySlug(id: string): string {
  return id.replace(/\.(mdx?)$/, "");
}
