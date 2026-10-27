import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as getAnime } from "./catalog-DM1krrJo.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useLibrary } from "./library-D1rdOLxH.mjs";
import { t as AnimeCard } from "./AnimeCard-ItBtn_HM.mjs";
import { t as EmptyState } from "./EmptyState-sqde1v1b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/favorites-BGl3hddV.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/favorites.tsx?tsr-split=component";
function FavoritesPage() {
	const favorites = useLibrary().favorites.map((id) => getAnime(id)).filter((a) => Boolean(a));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-4 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-lg font-bold",
			children: "المفضلة"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 7
		}, this), favorites.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {
			title: "قائمتك فارغة",
			description: "اضغط على زر القلب في صفحة أي عمل لإضافته هنا.",
			action: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/",
				className: "rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
				children: "تصفّح الأعمال"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 134
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 33
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "mt-4 pb-6",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 gap-3",
				children: favorites.map((anime) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimeCard, { anime }, anime.id, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 37
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 27
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 10
	}, this);
}
//#endregion
export { FavoritesPage as component };
