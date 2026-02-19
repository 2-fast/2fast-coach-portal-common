import {Coach} from "./Coach.js";
import {Track} from "./Track.js";
import {SparseTrackDay} from "./SparseTrackDay.js";

export interface SeasonInfo {
  coaches: { [key: string]: Coach };

  tracks: { [key: string]: Track };

  trackDays: { [key: string]: SparseTrackDay };
}
