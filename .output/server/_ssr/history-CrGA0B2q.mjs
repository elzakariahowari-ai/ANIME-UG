import { n as Trash2 } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as getAnime } from "./catalog-DM1krrJo.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useLibrary, t as clearHistory } from "./library-D1rdOLxH.mjs";
import { t as EmptyState } from "./EmptyState-sqde1v1b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-CrGA0B2q.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/history.tsx?tsr-split=component";
function formatRelative(ts) {
	const minutes = Math.round((Date.now() - ts) / 6e4);
	if (minutes < 1) return "الآن";
	if (minutes < 60) return `قبل ${minutes} دقيقة`;
	const hours = Math.round(minutes / 60);
	if (hours < 24) return `قبل ${hours} ساعة`;
	return `قبل ${Math.round(hours / 24)} يوم`;
}
function HistoryPage() {
	const entries = useLibrary().history.map((entry) => ({
		entry,
		anime: getAnime(entry.animeId)
	})).filter((e) => Boolean(e.anime));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-4 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-lg font-bold",
				children: "سجل المشاهدة"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 9
			}, this), entries.length > 0 && /* @__PURE__ */ (void 0)("button", {
				type: "button",
				onClick: clearHistory,
				className: "flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-destructive",
				children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 13
				}, this), "مسح السجل"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 32
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this), entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
			title: "لا يوجد سجل بعد",
			description: "سيظهر هنا كل ما تشاهده لتستأنف مشاهدتك من حيث توقفت.",
			action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/",
				className: "rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
				children: "ابدأ المشاهدة"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 142
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 31
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
			className: "mt-4 space-y-2 pb-6",
			children: entries.map(({ entry, anime }) => {
				const episode = anime.episodes.find((e) => e.id === entry.episodeId);
				if (!episode) return null;
				const pct = entry.durationSec > 0 ? Math.min(100, Math.round(entry.positionSec / entry.durationSec * 100)) : 0;
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/watch/$animeId/$episodeId",
					params: {
						animeId: anime.id,
						episodeId: episode.id
					},
					className: "relative flex items-center gap-3 overflow-hidden rounded-xl border border-border/70 bg-card p-3 transition-colors hover:border-primary/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: anime.poster,
							alt: "",
							loading: "lazy",
							width: 80,
							height: 120,
							className: "h-16 w-11 shrink-0 rounded-lg object-cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "block truncate text-sm font-semibold",
									children: anime.titleAr
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 49,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "block truncate text-xs text-muted-foreground",
									children: [
										"الحلقة ",
										episode.number,
										" · ",
										formatRelative(entry.updatedAt)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 21
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mt-1 block text-[11px] font-semibold text-accent",
									children: [
										"متبقٍ ",
										Math.max(1, Math.round((entry.durationSec - entry.positionSec) / 60)),
										" ",
										"دقيقة"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 21
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							"aria-hidden": true,
							className: "absolute inset-x-0 bottom-0 h-0.5 bg-primary/70",
							style: { width: `${pct}%` }
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 19
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 17
				}, this) }, `${entry.animeId}-${entry.episodeId}`, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 16
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 27
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 10
	}, this);
}
//#endregion
export { HistoryPage as component };
