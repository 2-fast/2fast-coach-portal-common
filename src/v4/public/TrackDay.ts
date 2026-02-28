// This types will be used in the offline and online data.
export interface TrackDay {
  /**
   * The track's handle.
   *
   * ONLINE + OFFLINE
   */
  track: string;

  /**
   * The event's date. Doubles as the track day's handle.
   *
   * ONLINE + OFFLINE
   */
  date: string;

  /**
   * Any special event (e.g. wmrra/omrra).
   *
   * OFFLINE
   */
  event: string;

  /**
   * A list of coaches (handles); these coaches can be booked.
   *
   * ONLINE
   */
  offering: String[];

  /**
   * A list of coaches (handle); the coaches are already booked. Customers cannot request them and these coaches cannot
   * remove themselves from this day.
   *
   * ONLINE
   */
  booked: String[];
}
