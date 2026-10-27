import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { o as Search } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as searchCatalog, t as CATALOG } from "./catalog-DM1krrJo.mjs";
import { t as AnimeCard } from "./AnimeCard-ItBtn_HM.mjs";
import { t as EmptyState } from "./EmptyState-sqde1v1b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-BjwGO9TF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/search.tsx?tsr-split=component";
function SearchPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const results = query.trim() ? searchCatalog(query) : CATALOG;
	const inputRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-4 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute top-1/2 right-3.5 size-5 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				ref: inputRef,
				type: "search",
				inputMode: "search",
				value: query,
				onChange: (e) => setQuery(e.target.value),
				placeholder: "ابحث بالاسم العربي أو الإنجليزي…",
				"aria-label": "البحث",
				className: "w-full rounded-2xl border border-border bg-card py-3 pr-11 pl-4 text-sm outline-none transition-colors focus:border-primary/60"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 7
		}, this), query.trim() && results.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
			title: "لا توجد نتائج",
			description: "لم نجد عملاً بهذا الاسم. لاحظ أن القائمة الحالية تجريبية ومحدودة من مصادر مفتوحة الترخيص."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 47
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "mt-4 pb-6",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mb-3 font-display text-lg font-bold",
				children: query.trim() ? `النتائج (${results.length})` : "كل الأعمال"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 gap-3",
				children: results.map((anime) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimeCard, { anime }, anime.id, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 35
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 190
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 10
	}, this);
}
//#endregion
export { SearchPage as component };
