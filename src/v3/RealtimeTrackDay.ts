import {Track} from "./Track.js";
import {Coach} from "./Coach.js";

export interface RealtimeTrackDay {
  date: string;

  trackGuid: string;

  track: Track;

  sessions: {
    sessionGuid: string;

    coachGuid: string;

    coach: Coach;
  }[];
}