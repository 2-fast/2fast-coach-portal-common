/**
 * Used to represent a coach's attendance at a track day. When present, the coach is attending, regardless of booking.
 * When omitted, the coach is not available.
 */
export interface CoachStatus {

  /**
   * The coach's handle.
   */
  coach: string;

  /**
   * True when the coach is attending the event and has been booked. False when the coach is attending but has not been
   * booked.
   */
  booked: boolean;
}