import { c as Play } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as DemoBadge } from "./DemoBadge-D89yxXEG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AnimeCard-ItBtn_HM.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/AnimeCard.tsx";
function AnimeCard({ anime, className, eager }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/anime/$id",
		params: { id: anime.id },
		className: cn("group relative block overflow-hidden rounded-2xl border border-border/70 bg-card shadow-lg transition-transform active:scale-[0.97]", className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative aspect-[2/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: anime.poster,
					alt: `ملصق ${anime.titleAr}`,
					loading: eager ? "eager" : "lazy",
					width: 400,
					height: 600,
					className: "size-full object-cover transition-transform duration-300 group-hover:scale-105"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 9
				}, this),
				anime.contentFlag === "demo-verified-open-license" && /* @__PURE__ */ (void 0)(DemoBadge, { className: "absolute top-2 right-2" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute inset-x-0 bottom-0 p-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "truncate font-display text-sm font-semibold",
						children: anime.titleAr
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-0.5 truncate text-[11px] text-muted-foreground",
						children: [anime.year ? `${anime.year} · ` : "", anime.genres.slice(0, 2).join("، ")]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-active:opacity-100",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full bg-primary/90 p-3 text-primary-foreground shadow-xl",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "size-5 fill-current" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
//#endregion
export { AnimeCard as t };
