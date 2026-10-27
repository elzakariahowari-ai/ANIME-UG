import { S as ArrowRight, _ as Heart, c as Play, y as CirclePlay } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./anime._id-D5nUiZd-.mjs";
import { t as DemoBadge } from "./DemoBadge-D89yxXEG.mjs";
import { a as useLibrary, i as toggleFavorite, n as getProgress } from "./library-D1rdOLxH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/anime._id-Cum__7tq.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/EpisodeList.tsx";
function EpisodeList({ anime }) {
	const library = useLibrary();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
		className: "space-y-2",
		children: anime.episodes.map((ep) => {
			const progress = getProgress(library, anime.id, ep.id);
			const pct = progress && progress.durationSec > 0 ? Math.min(100, Math.round(progress.positionSec / progress.durationSec * 100)) : 0;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/watch/$animeId/$episodeId",
				params: {
					animeId: anime.id,
					episodeId: ep.id
				},
				className: "relative flex items-center gap-3 overflow-hidden rounded-xl border border-border/70 bg-card px-3 py-3 transition-colors hover:border-primary/50",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CirclePlay, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 27,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "block truncate text-sm font-semibold",
							children: [
								"الحلقة ",
								ep.number,
								" — ",
								ep.titleAr
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 30,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "mt-0.5 block text-xs text-muted-foreground",
							children: [
								ep.durationLabel,
								ep.qualities.length > 1 && ` · ${ep.qualities.length} جودات`,
								ep.subtitles.length > 0 && " · ترجمة",
								pct > 0 && pct < 95 && ` · شاهدت ${pct}%`
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 33,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 29,
						columnNumber: 15
					}, this),
					pct >= 95 && /* @__PURE__ */ (void 0)("span", {
						className: "shrink-0 text-[10px] font-semibold text-accent",
						children: "تمّت المشاهدة"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 41,
						columnNumber: 17
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": true,
						className: "absolute inset-x-0 bottom-0 h-0.5 bg-primary/70 transition-all",
						style: { width: `${pct}%` }
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 45,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 21,
				columnNumber: 13
			}, this) }, ep.id, false, {
				fileName: _jsxFileName$1,
				lineNumber: 20,
				columnNumber: 11
			}, this);
		})
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/anime.$id.tsx?tsr-split=component";
function AnimeDetailsPage() {
	const { anime } = Route.useLoaderData();
	const isFavorite = useLibrary().favorites.includes(anime.id);
	const firstEpisode = anime.episodes[0];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-4 pt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative overflow-hidden rounded-3xl border border-border/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: anime.poster,
						alt: `ملصق ${anime.titleAr}`,
						className: "h-72 w-full object-cover object-top"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "min-w-0",
							children: [
								anime.contentFlag === "demo-verified-open-license" && /* @__PURE__ */ (void 0)(DemoBadge, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 68
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
									className: "mt-1.5 font-display text-2xl font-bold leading-tight",
									children: anime.titleAr
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 24,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-muted-foreground",
									children: [anime.titleEn, anime.year ? ` · ${anime.year}` : ""]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 27,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => toggleFavorite(anime.id),
							"aria-pressed": isFavorite,
							"aria-label": isFavorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة",
							className: cn("flex size-11 shrink-0 items-center justify-center rounded-full border transition-all active:scale-90", isFavorite ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card/80 text-muted-foreground backdrop-blur"),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heart, { className: cn("size-5", isFavorite && "fill-current") }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 33,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: anime.genres.map((genre) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground",
					children: genre
				}, genre, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 36
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-sm leading-relaxed text-foreground/90",
				children: anime.synopsisAr || "لا توجد نبذة عن هذا العمل بعد."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 rounded-xl border border-accent/30 bg-accent/10 p-3 text-xs leading-relaxed text-foreground/85",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "font-bold text-accent",
					children: "مصدر المحتوى: "
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this), anime.licenseNoteAr]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 7
			}, this),
			firstEpisode && /* @__PURE__ */ (void 0)(Button, {
				asChild: true,
				size: "lg",
				className: "mt-4 w-full rounded-xl font-bold",
				children: /* @__PURE__ */ (void 0)(Link, {
					to: "/watch/$animeId/$episodeId",
					params: {
						animeId: anime.id,
						episodeId: firstEpisode.id
					},
					children: [/* @__PURE__ */ (void 0)(Play, { className: "size-4 fill-current" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 13
					}, this), "شاهد الآن"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 24
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mt-5 pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-lg font-bold",
						children: "الحلقات"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "flex items-center gap-1 text-xs font-semibold text-muted-foreground",
						children: ["كل الأعمال", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EpisodeList, { anime }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
//#endregion
export { AnimeDetailsPage as component };
