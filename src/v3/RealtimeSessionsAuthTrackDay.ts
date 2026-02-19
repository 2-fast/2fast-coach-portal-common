import {Track} from "./Track.js";

export interface RealtimeSessionsAuthTrackDay {
  date: string;

  trackGuid: string;

  track: Track;
}