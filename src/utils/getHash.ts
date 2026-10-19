export function getHash(object: Record<string, unknown>): string {
  return btoa(encodeURIComponent(JSON.stringify(object)))
}
