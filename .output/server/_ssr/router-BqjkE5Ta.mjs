import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Heart, g as History, h as House, m as Info, o as Search, p as LayoutGrid } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as Route$7 } from "./anime._id-D5nUiZd-.mjs";
import { t as Route$8 } from "./watch._animeId._episodeId-D7BHUp3u.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BqjkE5Ta.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-BLVFti8N.css";
/**
* Centralized application error reporting.
* Logs runtime errors cleanly without third-party editor telemetry.
*/
function reportError(error, context = {}) {
	if (typeof window === "undefined") return;
	const message = describeThrown(error);
	const stack = error instanceof Error ? error.stack : void 0;
	console.error("[ANIME UG Error]", {
		message,
		stack,
		route: window.location.pathname,
		...context
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var _jsxFileName$2 = "/app/applet/src/components/AppHeader.tsx";
function AppHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex h-14 max-w-2xl items-center justify-between px-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/",
				className: "flex items-baseline gap-2",
				"aria-label": "ANIME UG — الرئيسية",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "font-display text-xl font-bold tracking-tight text-primary text-glow",
					children: "ANIME UG"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 12,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-xs font-semibold text-muted-foreground",
					children: "أنمي يو جي"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 15,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 11,
				columnNumber: 9
			}, this), pathname !== "/about" && /* @__PURE__ */ (void 0)(Button, {
				variant: "ghost",
				size: "icon",
				asChild: true,
				children: /* @__PURE__ */ (void 0)(Link, {
					to: "/about",
					"aria-label": "حول التطبيق ومصادر المحتوى",
					children: /* @__PURE__ */ (void 0)(Info, { className: "size-5 text-muted-foreground" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 21,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 20,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 19,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 10,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/BottomNav.tsx";
var items = [
	{
		to: "/",
		label: "الرئيسية",
		icon: House
	},
	{
		to: "/categories",
		label: "التصنيفات",
		icon: LayoutGrid
	},
	{
		to: "/search",
		label: "البحث",
		icon: Search
	},
	{
		to: "/favorites",
		label: "المفضلة",
		icon: Heart
	},
	{
		to: "/history",
		label: "السجل",
		icon: History
	}
];
function BottomNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
		className: "safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/90 backdrop-blur-lg",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-2xl grid-cols-5 px-2 pt-1.5 pb-1",
			children: items.map(({ to, label, icon: Icon }) => {
				const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
				return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to,
					"aria-current": active ? "page" : void 0,
					className: cn("flex flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 text-[10px] font-semibold transition-colors", active ? "text-primary" : "text-muted-foreground hover:text-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: cn("size-5", active && "drop-shadow-[0_0_8px_var(--primary)]") }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 31,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 32,
						columnNumber: 15
					}, this)]
				}, to, true, {
					fileName: _jsxFileName$1,
					lineNumber: 22,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-primary",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 font-display text-xl font-semibold",
					children: "الصفحة غير موجودة"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
						children: "العودة للرئيسية"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-xl font-semibold",
					children: "تعذّر تحميل الصفحة"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "حدث خطأ ما. يمكنك المحاولة مرة أخرى أو العودة للرئيسية."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
						children: "المحاولة مرة أخرى"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50",
						children: "العودة للرئيسية"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 5
	}, this);
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: "ANIME UG — مشاهدة الأنمي بالعربية" },
			{
				name: "description",
				content: "منصة ANIME UG لمشاهدة الأنمي بالعربية: بحث، تصنيفات، مفضلة، سجل مشاهدة، ومشغّل يدعم جودات متعددة وترجمة عربية."
			},
			{
				property: "og:title",
				content: "ANIME UG — مشاهدة الأنمي بالعربية"
			},
			{
				property: "og:description",
				content: "منصة أنمي عربية بواجهة داكنة أنيقة مع مشغّل يدعم جودات متعددة وترجمة عربية."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Changa:wght@500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "ar",
		dir: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 117,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
			className: "min-h-dvh antialiased",
			children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 115,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	const immersive = useRouterState({ select: (s) => s.location.pathname }).startsWith("/watch");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: `flex min-h-dvh flex-col ${immersive ? "" : "pb-20"}`,
			children: [
				!immersive && /* @__PURE__ */ (void 0)(AppHeader, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 24
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 139,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 137,
					columnNumber: 9
				}, this),
				!immersive && /* @__PURE__ */ (void 0)(BottomNav, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 141,
					columnNumber: 24
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 135,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 134,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$5 = () => import("./routes-C2kOv_4Q.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "ANIME UG — منصة الأنمي بالعربية" },
		{
			name: "description",
			content: "شاهد الأعمال المعروضة بالعربية مع مشغّل يدعم جودات متعددة وترجمة، وقوائم مفضلة وسجل مشاهدة. المحتوى الحالي تجريبي من مصادر مفتوحة الترخيص."
		},
		{
			property: "og:title",
			content: "ANIME UG — منصة الأنمي بالعربية"
		},
		{
			property: "og:description",
			content: "واجهة عربية داكنة، مشغّل بجودات متعددة وترجمة عربية، ومفضلة وسجل مشاهدة."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-BvNEJUyS.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "حول التطبيق — ANIME UG" },
		{
			name: "description",
			content: "سياسة المحتوى والمصادر في ANIME UG: لا محتوى مُختلق ولا مواقع غير مرخّصة."
		},
		{
			property: "og:title",
			content: "حول التطبيق — ANIME UG"
		},
		{
			property: "og:description",
			content: "سياسة المحتوى والمصادر في ANIME UG."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./categories-B_H84Wur.mjs");
var Route$3 = createFileRoute("/categories")({
	head: () => ({ meta: [
		{ title: "التصنيفات — ANIME UG" },
		{
			name: "description",
			content: "تصفّح أعمال ANIME UG حسب التصنيف."
		},
		{
			property: "og:title",
			content: "التصنيفات — ANIME UG"
		},
		{
			property: "og:description",
			content: "تصفّح الأعمال حسب التصنيف."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./favorites-BGl3hddV.mjs");
var Route$2 = createFileRoute("/favorites")({
	head: () => ({ meta: [
		{ title: "المفضلة — ANIME UG" },
		{
			name: "description",
			content: "الأعمال التي حفظتها في المفضلة داخل ANIME UG."
		},
		{
			property: "og:title",
			content: "المفضلة — ANIME UG"
		},
		{
			property: "og:description",
			content: "أعمالك المحفوظة."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./history-CrGA0B2q.mjs");
var Route$1 = createFileRoute("/history")({
	head: () => ({ meta: [
		{ title: "سجل المشاهدة — ANIME UG" },
		{
			name: "description",
			content: "أعمالك التي شاهدتها مؤخرًا، مع استئناف من حيث توقفت."
		},
		{
			property: "og:title",
			content: "سجل المشاهدة — ANIME UG"
		},
		{
			property: "og:description",
			content: "تابع من حيث توقفت."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./search-BjwGO9TF.mjs");
var Route = createFileRoute("/search")({
	head: () => ({ meta: [
		{ title: "البحث — ANIME UG" },
		{
			name: "description",
			content: "ابحث في أعمال ANIME UG بالاسم العربي أو الإنجليزي."
		},
		{
			property: "og:title",
			content: "البحث — ANIME UG"
		},
		{
			property: "og:description",
			content: "ابحث في أعمال ANIME UG."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	CategoriesRoute: Route$3.update({
		id: "/categories",
		path: "/categories",
		getParentRoute: () => Route$6
	}),
	FavoritesRoute: Route$2.update({
		id: "/favorites",
		path: "/favorites",
		getParentRoute: () => Route$6
	}),
	HistoryRoute: Route$1.update({
		id: "/history",
		path: "/history",
		getParentRoute: () => Route$6
	}),
	SearchRoute: Route.update({
		id: "/search",
		path: "/search",
		getParentRoute: () => Route$6
	}),
	AnimeIdRoute: Route$7.update({
		id: "/anime/$id",
		path: "/anime/$id",
		getParentRoute: () => Route$6
	}),
	WatchAnimeIdEpisodeIdRoute: Route$8.update({
		id: "/watch/$animeId/$episodeId",
		path: "/watch/$animeId/$episodeId",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
