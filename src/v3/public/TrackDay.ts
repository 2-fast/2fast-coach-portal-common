
interface TrackDay {

  handle: string;

  // A list of coaches (handles); these coaches can be booked.
  offering: String[];

  // A list of coaches (handle); the coaches are already booked. Customers cannot request them and these coaches cannot
  // remove themselves from this day.
  booked: String[];
}
