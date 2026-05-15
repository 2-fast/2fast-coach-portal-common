import {CoachStatus} from "./CoachStatus.js";

// This types will be used in the offline and online data.
export interface TrackDay {
  /**
   * The track's handle.
   */
  track: string;

  /**
   * The event's date. Doubles as the track day's handle.
   */
  date: string;

  /**
   * Every coach that is attending the track day. If a coach is not in this list, they are not attending the track day.
   *
   * Undefined when used offline.
   */
  coaches: CoachStatus[] | undefined;
}
