import {TrackDay} from "./TrackDay.js";
import {Coach} from "./Coach";
import {Track} from "./Track";

export interface Season {

  /**
   * All tracks visited during the season. Track days will only reference a track in this list.
   */
  track: Track[];

  /**
   * These are offline track days. This means all online-only fields will be left undefined.
   */
  day: TrackDay[];

  /**
   * All active coaches. Coaches here may have no available events.
   */
  coach: Coach[];
}