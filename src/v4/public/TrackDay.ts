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
   * A list of coaches (handles); these coaches can be booked.
   *
   * Undefined when used offline.
   */
  offering: String[] | undefined;

  /**
   * A list of coaches (handle); the coaches are already booked. Customers cannot request them and these coaches cannot
   * remove themselves from this day.
   *
   * Undefined when used offline.
   */
  booked: String[] | undefined;
}
