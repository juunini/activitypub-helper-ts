import type { Object as ObjectType } from '../../core/Object'

/**
 * Represents a short written work typically less than a single paragraph in length.
 *
 * @see https://www.w3.org/ns/activitystreams#Note
 * @properties Inherits all properties from [[Object](#dfn-object)](#dfn-object).
 * @extends [[Object](#dfn-object)](#dfn-object)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Note",
 *   "name": "A Word of Warning",
 *   "content": "Looks like it is going to rain today. Bring an umbrella!"
 * }
 * ```
 */
export interface Note extends ObjectType {
  type: 'Note'
}
