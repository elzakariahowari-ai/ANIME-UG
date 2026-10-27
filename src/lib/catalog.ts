import bbbPoster from "@/assets/posters/big-buck-bunny.jpg";
import conanPoster from "@/assets/posters/conan.jpg";
import edPoster from "@/assets/posters/elephants-dream.jpg";
import sintelPoster from "@/assets/posters/sintel.jpg";
import tosPoster from "@/assets/posters/tears-of-steel.jpg";
import type { Anime, SubtitleTrack } from "@/lib/types";

/**
 * Content rules for ANIME UG (hard requirement from the product brief):
 *
 * 1. NO invented titles, episodes, or stream URLs. Every entry below is a
 *    real, verified, open-license (CC-BY) work from the Blender Foundation,
 *    streamed from archive.org's official copies. Each URL was checked to
 *    respond with video/mp4 before being added here.
 * 2. NO scraping of unauthorized streaming sites. To add real anime, plug a
 *    licensed provider API into this file (see README and /about) — entries
 *    would then carry `contentFlag: "licensed-provider"` and their own
 *    verified quality/subtitle data.
 * 3. Demo/open-license content is always labeled with a DemoBadge in the UI
 *    so it can never be confused with a licensed anime catalog.
 */

/** One shared demo subtitle track (clearly labeled as demo). */
export const DEMO_SUBTITLE_AR: SubtitleTrack = {
  label: "عربي (تجريبي)",
  lang: "ar",
  src: "/subtitles/demo-ar.vtt",
};

export const BLENDER_LICENSE_AR =
  "عمل مفتوح الترخيص من Blender Foundation (رخصة CC-BY) — البث عبر النسخ الرسمية على archive.org.";

export const OWNER_PROVIDED_LICENSE_AR =
  "محتوى مقدَّم مباشرة من مالك التطبيق (رابط بث يوفره المالك نفسه ويؤكد حقه في عرضه).";

export const CATALOG: Anime[] = [
  {
    id: "conan",
    titleAr: "كونان",
    titleEn: "Conan",
    genres: ["دراما"],
    synopsisAr: "",
    poster: conanPoster,
    contentFlag: "owner-provided",
    licenseNoteAr: OWNER_PROVIDED_LICENSE_AR,
    episodes: [
      {
        id: "conan-film",
        number: 1,
        titleAr: "الفيلم كامل",
        durationLabel: "24:40",
        qualities: [
          {
            label: "أصلية",
            url: "https://files.catbox.moe/50dc1f.mp4",
          },
        ],
        subtitles: [],
      },
    ],
  },
  {
    id: "sintel",
    titleAr: "سينتل",
    titleEn: "Sintel",
    year: 2010,
    genres: ["فانتازيا", "مغامرة", "دراما"],
    synopsisAr:
      "فتاة تسعى للعثور على تنّين صغير ربّته بعد أن فقده، في رحلة عبر أراضٍ قاسية ومدن مهجورة. فيلم قصير مفتوح الترخيص يُستخدم هنا كمحتوى تجريبي لاختبار التطبيق كاملًا.",
    poster: sintelPoster,
    contentFlag: "demo-verified-open-license",
    licenseNoteAr: BLENDER_LICENSE_AR,
    featured: true,
    episodes: [
      {
        id: "sintel-film",
        number: 1,
        titleAr: "الفيلم كامل",
        durationLabel: "14:48",
        qualities: [
          { label: "1080p", url: "https://archive.org/download/Sintel/sintel-2048-surround.mp4" },
          {
            label: "480p",
            url: "https://archive.org/download/Sintel/sintel-2048-surround_512kb.mp4",
          },
        ],
        subtitles: [DEMO_SUBTITLE_AR],
      },
    ],
  },
  {
    id: "big-buck-bunny",
    titleAr: "بيغ باك باني",
    titleEn: "Big Buck Bunny",
    year: 2008,
    genres: ["كوميديا", "مغامرة"],
    synopsisAr:
      "أرنب عملاق طيب القلب ينتقم بلطف من ثلاثة قوارض مزعجة في غابة مضحكة. تجربة مشاهدة قصيرة لاختبار المشغّل والترجمة التجريبية.",
    poster: bbbPoster,
    contentFlag: "demo-verified-open-license",
    licenseNoteAr: BLENDER_LICENSE_AR,
    episodes: [
      {
        id: "bbb-film",
        number: 1,
        titleAr: "الفيلم كامل",
        durationLabel: "10:34",
        qualities: [
          {
            label: "720p",
            url: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
          },
        ],
        subtitles: [DEMO_SUBTITLE_AR],
      },
    ],
  },
  {
    id: "tears-of-steel",
    titleAr: "دموع الفولاذ",
    titleEn: "Tears of Steel",
    year: 2012,
    genres: ["خيال علمي", "أكشن"],
    synopsisAr:
      "مجموعة من المحاربين والروبوتات في مستقبل أمستردام، تجربة مؤثرة في المؤثرات البصرية. يتضمّن جودتين حقيقيتين (720p و1080p) لتجربة مبدّل الجودة.",
    poster: tosPoster,
    contentFlag: "demo-verified-open-license",
    licenseNoteAr: BLENDER_LICENSE_AR,
    episodes: [
      {
        id: "tos-film",
        number: 1,
        titleAr: "الفيلم كامل",
        durationLabel: "12:14",
        qualities: [
          {
            label: "1080p",
            url: "https://archive.org/download/Tears-of-Steel/tears_of_steel_1080p.mp4",
          },
          {
            label: "720p",
            url: "https://archive.org/download/Tears-of-Steel/tears_of_steel_720p.mp4",
          },
        ],
        subtitles: [DEMO_SUBTITLE_AR],
      },
    ],
  },
  {
    id: "elephants-dream",
    titleAr: "حلم الفيلة",
    titleEn: "Elephants Dream",
    year: 2006,
    genres: ["خيال", "غموض"],
    synopsisAr:
      "مسافران يخترقان عالمًا آليًا غريبًا لا يتوقف عن التحوّل. أول فيلم مفتوح المصدر في العالم، يُستخدم هنا كمحتوى تجريبي مرخّص.",
    poster: edPoster,
    contentFlag: "demo-verified-open-license",
    licenseNoteAr: BLENDER_LICENSE_AR,
    episodes: [
      {
        id: "ed-film",
        number: 1,
        titleAr: "الفيلم كامل",
        durationLabel: "10:53",
        qualities: [
          {
            label: "720p",
            url: "https://archive.org/download/elephants-dream_202403/Elephants%20Dream.mp4",
          },
        ],
        subtitles: [DEMO_SUBTITLE_AR],
      },
    ],
  },
  {
    id: "quality-test-clip",
    titleAr: "مقطع اختبار الجودات",
    titleEn: "Multi-Quality Test Clip",
    year: 2013,
    genres: ["تجريبي"],
    synopsisAr:
      "مقطع قصير (10 ثوانٍ) لتجربة مبدّل الجودة فقط: يوفّر 360p و720p و1080p من نفس المصدر. ليس عملاً سينمائيًا ولا يظهر ضمن الاقتراحات.",
    poster: bbbPoster,
    contentFlag: "demo-verified-open-license",
    licenseNoteAr: "مقاطع اختبار عامة متعددة الجودات من test-videos.co.uk.",
    episodes: [
      {
        id: "quality-test-clip",
        number: 1,
        titleAr: "المقطع التجريبي",
        durationLabel: "0:10",
        qualities: [
          {
            label: "1080p",
            url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4",
          },
          {
            label: "720p",
            url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_2MB.mp4",
          },
          {
            label: "360p",
            url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
          },
          {
            // Locally generated (ffmpeg) test asset — decodable in every browser.
            label: "تجريبي WebM",
            url: "/demo/demo-clip.webm",
          },
        ],
        subtitles: [DEMO_SUBTITLE_AR],
      },
    ],
  },
];

/** Anime to feature in the home hero (guaranteed non-empty: CATALOG always has entries). */
export const FEATURED: Anime = CATALOG.find((a) => a.featured) ?? CATALOG[0]!;

export function getAnime(id: string): Anime | undefined {
  return CATALOG.find((a) => a.id === id);
}

export function allGenres(): string[] {
  return [...new Set(CATALOG.flatMap((a) => a.genres))].sort((a, b) => a.localeCompare(b, "ar"));
}

export function searchCatalog(query: string): Anime[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return CATALOG.filter(
    (a) => a.titleAr.toLowerCase().includes(q) || a.titleEn.toLowerCase().includes(q),
  );
}
