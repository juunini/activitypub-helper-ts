import type { Object as ObjectType } from '../../core/Object'

/**
 * Represents an individual person.
 *
 * @see https://www.w3.org/ns/activitystreams#Person
 * @properties Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Person",
 *   "name": "Sally Smith"
 * }
 * ```
 */
export interface Person extends ObjectType {
  type: 'Person'
}
