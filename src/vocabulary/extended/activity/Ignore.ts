import type { Activity } from '../../core/Activity'

/**
 * Indicates that the actor is ignoring the object. The target and origin typically have no defined meaning.
 *
 * @see https://www.w3.org/ns/activitystreams#Ignore
 * @properties Inherits all properties from [[Activity](#dfn-activity)](#dfn-activity).
 * @extends [[Activity](#dfn-activity)](#dfn-activity)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "summary": "Sally ignored a note",
 *   "type": "Ignore",
 *   "actor": {
 *     "type": "Person",
 *     "name": "Sally"
 *   },
 *   "object": "http://example.org/notes/1"
 * }
 * ```
 */
export interface Ignore extends Activity {
  type: 'Ignore'
}
