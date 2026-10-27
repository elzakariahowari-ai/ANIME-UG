import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { r as allGenres, t as CATALOG } from "./catalog-DM1krrJo.mjs";
import { t as AnimeCard } from "./AnimeCard-ItBtn_HM.mjs";
import { t as EmptyState } from "./EmptyState-sqde1v1b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-B_H84Wur.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/categories.tsx?tsr-split=component";
function CategoriesPage() {
	const genres = allGenres();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const filtered = selected ? CATALOG.filter((a) => a.genres.includes(selected)) : CATALOG;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-4 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-lg font-bold",
				children: "التصنيفات"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "scrollbar-hide -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setSelected(null),
					className: cn("shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors", selected === null ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"),
					children: "الكل"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 9
				}, this), genres.map((genre) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setSelected(genre),
					className: cn("shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors", selected === genre ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"),
					children: genre
				}, genre, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 30
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
				title: "لا أعمال في هذا التصنيف",
				description: "جرّب تصنيفًا آخر."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 32
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mt-4 pb-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 gap-3",
					children: filtered.map((anime) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimeCard, { anime }, anime.id, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 36
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 113
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 10
	}, this);
}
//#endregion
export { CategoriesPage as component };
