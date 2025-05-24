import {Coach} from "./Coach";
import {TrackDay} from "./TrackDay";
import {Track} from "./Track";

export interface SeasonInfo {
  coaches: { [key: string]: Coach };

  tracks: { [key: string]: Track };

  trackDays: { [key: string]: TrackDay };
}
