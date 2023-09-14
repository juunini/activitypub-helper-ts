/**
 * In a paged [Collection](#dfn-collection), indicates the furthest preceeding page of items in the collection.
 *
 * @see https://www.w3.org/ns/activitystreams#first
 * @range [[CollectionPage](#dfn-collectionpage)](#dfn-collectionpage) | [[Link](#dfn-link)](#dfn-link)
 * @functional True
 * @domain [[Collection](#dfn-collection)](#dfn-collection)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally's blog posts",
 *   "type": "Collection",
 *   "totalItems": 3,
 *   "first": "http://example.org/collection?page=0"
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally's blog posts",
 *   "type": "Collection",
 *   "totalItems": 3,
 *   "first": {
 *     "type": "Link",
 *     "summary": "First Page",
 *     "href": "http://example.org/collection?page=0"
 *   }
 * }
 * ```
 */
export type first = any