import type { Object as ObjectType } from '../../core/Object'

/**
 * Represents a video document of any kind.
 *
 * @see https://www.w3.org/ns/activitystreams#Video
 * @properties Inherits all properties from [[Document](#dfn-document)](#dfn-document).
 * @extends [[Document](#dfn-document)](#dfn-document)
 * @example
 * ```json
 * {
 *   "@context": "https://www.w3.org/ns/activitystreams",
 *   "type": "Video",
 *   "name": "Puppy Plays With Ball",
 *   "url": "http://example.org/video.mkv",
 *   "duration": "PT2H"
 * }
 * ```
 */
export interface Video extends ObjectType {
  type: 'Video'
}
