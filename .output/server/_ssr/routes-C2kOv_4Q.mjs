import { c as Play, m as Info } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { n as FEATURED, t as CATALOG } from "./catalog-DM1krrJo.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as DemoBadge } from "./DemoBadge-D89yxXEG.mjs";
import { t as AnimeCard } from "./AnimeCard-ItBtn_HM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C2kOv_4Q.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Index() {
	const rest = CATALOG.filter((a) => a.id !== FEATURED.id);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative mt-3 overflow-hidden rounded-3xl border border-border/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: FEATURED.poster,
						alt: `ملصق ${FEATURED.titleAr}`,
						className: "h-64 w-full object-cover object-top"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 12,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-x-0 bottom-0 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoBadge, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 15,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "mt-2 font-display text-3xl font-bold leading-tight text-glow",
								children: FEATURED.titleAr
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 16,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									FEATURED.titleEn,
									" · ",
									FEATURED.year,
									" · ",
									FEATURED.genres.join("، ")
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 19,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									asChild: true,
									className: "flex-1 rounded-xl font-bold",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/watch/$animeId/$episodeId",
										params: {
											animeId: FEATURED.id,
											episodeId: FEATURED.episodes[0].id
										},
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-4 fill-current" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 28,
											columnNumber: 17
										}, this), "شاهد الآن"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 24,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 23,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									asChild: true,
									variant: "secondary",
									className: "rounded-xl font-bold",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
										to: "/anime/$id",
										params: { id: FEATURED.id },
										children: "التفاصيل"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 33,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/about",
					className: "flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-3.5 transition-colors hover:border-accent/60",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, { className: "mt-0.5 size-5 shrink-0 text-accent" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs leading-relaxed text-foreground/90",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-bold text-accent",
							children: "المحتوى الحالي تجريبي ومرخّص: "
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this), "الأعمال المعروضة أفلام مفتوحة الترخيص (Blender Foundation) لبثها عبر archive.org. لا توجد قائمة أنمي حقيقية بعد — تُضاف فقط من مصدر مرخّص توفّره. اضغط لمعرفة التفاصيل."]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mt-5 pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mb-3 font-display text-lg font-bold",
					children: "كل الأعمال المتاحة"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 gap-3",
					children: rest.map((anime, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimeCard, {
						anime,
						eager: i < 2
					}, anime.id, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 35
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
