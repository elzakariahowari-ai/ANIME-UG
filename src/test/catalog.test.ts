import { CATALOG, FEATURED, getAnime, allGenres, searchCatalog } from "@/lib/catalog";

// Host allowlist: only verified, licensed/open-license stream hosts may appear
// in the catalog. Anything else is a content-policy violation.
const ALLOWED_HOSTS = ["archive.org", "test-videos.co.uk", "files.catbox.moe"];

describe("Catalog content rules", () => {
  it("every entry is clearly flagged as demo or licensed with a license note", () => {
    for (const anime of CATALOG) {
      expect(["demo-verified-open-license", "licensed-provider", "owner-provided"]).toContain(
        anime.contentFlag,
      );
      expect(anime.licenseNoteAr.trim().length).toBeGreaterThan(10);
    }
  });

  it("every episode stream URL is HTTPS from an allowlisted host or a same-origin local asset", () => {
    for (const anime of CATALOG) {
      expect(anime.episodes.length).toBeGreaterThan(0);
      for (const ep of anime.episodes) {
        expect(ep.qualities.length).toBeGreaterThan(0);
        for (const q of ep.qualities) {
          if (q.url.startsWith("/")) {
            // Local, self-produced demo asset served from this app only.
            expect(q.url.startsWith("/demo/")).toBe(true);
          } else {
            const url = new URL(q.url);
            expect(url.protocol).toBe("https:");
            expect(ALLOWED_HOSTS).toContain(url.hostname);
          }
        }
      }
    }
  });

  it("quality labels are the concrete ones the source provides", () => {
    const tos = getAnime("tears-of-steel")!;
    expect(tos.episodes[0]!.qualities.map((q) => q.label)).toEqual(
      expect.arrayContaining(["1080p", "720p"]),
    );
    const clip = getAnime("quality-test-clip")!;
    expect(clip.episodes[0]!.qualities.map((q) => q.label)).toEqual(
      expect.arrayContaining(["1080p", "720p", "360p"]),
    );
  });

  it("has unique anime and episode ids", () => {
    const animeIds = CATALOG.map((a) => a.id);
    expect(new Set(animeIds).size).toBe(animeIds.length);
    for (const anime of CATALOG) {
      const epIds = anime.episodes.map((e) => e.id);
      expect(new Set(epIds).size).toBe(epIds.length);
    }
  });

  it("demo subtitle tracks are local files, clearly labeled as demo", () => {
    for (const anime of CATALOG) {
      for (const ep of anime.episodes) {
        for (const sub of ep.subtitles) {
          expect(sub.src.startsWith("/subtitles/")).toBe(true);
          expect(sub.label).toContain("تجريبي");
          expect(sub.lang).toBe("ar");
        }
      }
    }
  });

  it("lookup helpers work", () => {
    expect(getAnime("sintel")).toBeDefined();
    expect(getAnime("does-not-exist")).toBeUndefined();
    expect(FEATURED.titleAr.length).toBeGreaterThan(0);
    expect(allGenres().length).toBeGreaterThan(0);
    expect(searchCatalog("sintel").map((a) => a.id)).toContain("sintel");
    expect(searchCatalog("مقطع").map((a) => a.id)).toContain("quality-test-clip");
  });
});
