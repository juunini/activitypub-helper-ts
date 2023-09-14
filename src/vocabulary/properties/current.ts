/**
 * In a paged [Collection](#dfn-collection), indicates the page that contains the most recently updated member items.
 *
 * @see https://www.w3.org/ns/activitystreams#current
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
 *   "current": "http://example.org/collection",
 *   "items": [
 *     "http://example.org/posts/1",
 *     "http://example.org/posts/2",
 *     "http://example.org/posts/3"
 *   ]
 * }
 * ```
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally's blog posts",
 *   "type": "Collection",
 *   "totalItems": 3,
 *   "current": {
 *     "type": "Link",
 *     "summary": "Most Recent Items",
 *     "href": "http://example.org/collection"
 *   },
 *   "items": [
 *     "http://example.org/posts/1",
 *     "http://example.org/posts/2",
 *     "http://example.org/posts/3"
 *   ]
 * }
 * ```
 */
export type current = any