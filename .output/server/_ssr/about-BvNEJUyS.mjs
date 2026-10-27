import { i as ShieldCheck, s as Plug, x as Captions } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BvNEJUyS.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/about.tsx?tsr-split=component";
var sections = [
	{
		icon: ShieldCheck,
		title: "سياسة المحتوى",
		body: "لا يعرض ANIME UG أي عمل أو حلقة أو رابط بث لم يُتحقق منه. كل المحتوى الحالي تجريبي ومن مصادر مفتوحة الترخيص يمكن بثّها قانونًا: أفلام Blender Foundation المفتوحة (رخصة CC-BY) عبر النسخ الرسمية على archive.org، ومقاطع اختبار عامة من test-videos.co.uk. لا يتم استخدام أي موقع بث غير مرخّص ولا جمع محتوى منه."
	},
	{
		icon: Plug,
		title: "إضافة أنمي حقيقي",
		body: "تُضاف الأعمال الحقيقية فقط من واجهة برمجية مرخّصة توفرها أنت (مزوّد بث رسمي أو قنوات تملك حق عرضها). كل عمل يُجلب من المصدر يحمل شارة «مرخّص» وقائمة جوداته وترجماته كما يوفرها المصدر نفسه — ولا تُختلق أي بيانات."
	},
	{
		icon: Captions,
		title: "الترجمة العربية",
		body: "الترجمة التجريبية المرفقة حاليًا ملف للعرض فقط للتأكد من عمل المشغّل وتحكّم التوقيت. لا تُضاف ترجمات حقيقية إلا عند توفّرها من مصدر مرخّص، مع أدوات اختيار الترجمة وتعديل توقيتها (+/− 0.5 ثانية)."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-4 pt-4 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-xl font-bold",
				children: "حول ANIME UG"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1.5 text-sm text-muted-foreground",
				children: "منصة عربية لمشاهدة الأنمي بواجهة داكنة، مصمّمة للهواتف، مع مشغّل يدعم جودات متعددة (480p/720p/1080p حسب ما يوفره المصدر)، ومفضلة وسجل مشاهدة محفوظين على جهازك."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 space-y-3",
				children: sections.map(({ icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "rounded-2xl border border-border/70 bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "flex items-center gap-2 font-display text-base font-bold text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 15
						}, this), title]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-sm leading-relaxed text-foreground/85",
						children: body
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 13
					}, this)]
				}, title, true, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 text-xs leading-relaxed text-muted-foreground",
				children: "ملاحظة للمطوّر: خطوات تغليف التطبيق لنظام Android (APK) عبر Capacitor موضّحة في ملف README داخل المشروع."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
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
export { AboutPage as component };
