export interface OfferRequest {

  coach: string;

  trackDay: string;

  // "ADD"    = to add [coach] to [TrackDay.offering].
  // "REMOVE" = to remove [coach] from [TrackDay.ordering].
  // "BOOK"   = to remove [coach] from [TrackDay.offering] and add it to [TrackDay.booked].
  action: string;
}