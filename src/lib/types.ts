export interface VideoQuality {
  /** Human label shown in the quality menu, e.g. "1080p". */
  label: string;
  /** Direct stream URL exactly as provided by the licensed source. */
  url: string;
}

export interface SubtitleTrack {
  label: string;
  lang: string;
  /** VTT file served from this app's /public directory. */
  src: string;
}

export interface Episode {
  id: string;
  number: number;
  titleAr: string;
  durationLabel: string;
  qualities: VideoQuality[];
  subtitles: SubtitleTrack[];
}

/** Why this content may legally be streamed in this app. */
export type ContentFlag = "demo-verified-open-license" | "owner-provided" | "licensed-provider";

export interface Anime {
  id: string;
  titleAr: string;
  titleEn: string;
  /** Release year when the source provides it; owner-provided works may omit it. */
  year?: number;
  genres: string[];
  synopsisAr: string;
  poster: string;
  contentFlag: ContentFlag;
  licenseNoteAr: string;
  featured?: boolean;
  episodes: Episode[];
}
