globalThis.__nitro_main__ = import.meta.url;
import { i as defineLazyEventHandler, n as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-27T14:44:32.812Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-27T14:44:32.812Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/AnimeCard-CDbYTNR0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8be-mzMGzFMMv2iGzYH+60ySiEDUqAA\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 2238,
		"path": "../public/assets/AnimeCard-CDbYTNR0.js"
	},
	"/assets/DemoBadge-BcYl7cG7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25a-QsBreYHlLFusRXzmfVMy5G4q3YI\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 602,
		"path": "../public/assets/DemoBadge-BcYl7cG7.js"
	},
	"/assets/EmptyState-C3waP1dH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"418-3YLRqiXH/OvQqfYrSk+dSZBSu/c\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 1048,
		"path": "../public/assets/EmptyState-C3waP1dH.js"
	},
	"/assets/about-DZ08bjTL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"edb-r2uDDEYvUPPo82/x73yZTYlDcmg\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 3803,
		"path": "../public/assets/about-DZ08bjTL.js"
	},
	"/assets/anime._id-F52R-FCr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a58-H5TyKripPap2fTIFkCce0IPq8fw\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 6744,
		"path": "../public/assets/anime._id-F52R-FCr.js"
	},
	"/assets/arrow-right--nt2DbAw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-D2aoq6d6ClwrIz2uaVAzLSHIUkE\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 164,
		"path": "../public/assets/arrow-right--nt2DbAw.js"
	},
	"/assets/captions-CeTgx-qB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d6-0FmECnDi72YGV8xF1ym6vqOK2h0\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 214,
		"path": "../public/assets/captions-CeTgx-qB.js"
	},
	"/assets/big-buck-bunny-BbDlkK-i.jpg": {
		"type": "image/jpeg",
		"etag": "\"29f77-DvQBm5z5LG/ramxkvY7u2nOG5V4\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 171895,
		"path": "../public/assets/big-buck-bunny-BbDlkK-i.jpg"
	},
	"/assets/conan-CVgUslQC.jpg": {
		"type": "image/jpeg",
		"etag": "\"4f1d-6REttBMlXiA0Qvv7r5g6XIzLfS0\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 20253,
		"path": "../public/assets/conan-CVgUslQC.jpg"
	},
	"/assets/elephants-dream-DF-DSU_-.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ef54-QRvzzNelVw1NCPGG4bD9h5n37ZE\"",
		"mtime": "2026-10-27T14:44:32.117Z",
		"size": 192340,
		"path": "../public/assets/elephants-dream-DF-DSU_-.jpg"
	},
	"/assets/favorites-Dwc7G4d1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"593-wOITZxAIr+eIPxz8aHnY40Vb7cU\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 1427,
		"path": "../public/assets/favorites-Dwc7G4d1.js"
	},
	"/assets/history-DfmQBZfo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f43-Cyw+HMG+FEg8wrcARcU6vKWot4E\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 3907,
		"path": "../public/assets/history-DfmQBZfo.js"
	},
	"/assets/categories-CSZFsPq8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"825-zww4HdDz+JB/zWPlkFdw+2bbgWU\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 2085,
		"path": "../public/assets/categories-CSZFsPq8.js"
	},
	"/assets/jsx-dev-runtime-CsguC2Sq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"697d-Lq1P/AIuf71M6gzBbu071ITW/VA\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 27005,
		"path": "../public/assets/jsx-dev-runtime-CsguC2Sq.js"
	},
	"/assets/routes-sTDOASfO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f92-1EtUjLL18pTWvm3CqSW8vCb81bQ\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 3986,
		"path": "../public/assets/routes-sTDOASfO.js"
	},
	"/assets/search-DB4gwfaE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f3-IsxKG+J+AahTdaFqdxnNUtTETxc\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 2035,
		"path": "../public/assets/search-DB4gwfaE.js"
	},
	"/assets/sintel-CizFamly.jpg": {
		"type": "image/jpeg",
		"etag": "\"28415-iHTha1Un+ar8FCVET4Z1NCQDmRQ\"",
		"mtime": "2026-10-27T14:44:32.117Z",
		"size": 164885,
		"path": "../public/assets/sintel-CizFamly.jpg"
	},
	"/assets/styles-BLVFti8N.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15175-XMbv783+nMJXMhJDPtVNSMIcuuc\"",
		"mtime": "2026-10-27T14:44:32.117Z",
		"size": 86389,
		"path": "../public/assets/styles-BLVFti8N.css"
	},
	"/assets/tears-of-steel-BWdvk2ij.jpg": {
		"type": "image/jpeg",
		"etag": "\"2afbc-N9s2gIEDkK4Z9kbARjqnBTrEFWs\"",
		"mtime": "2026-10-27T14:44:32.117Z",
		"size": 176060,
		"path": "../public/assets/tears-of-steel-BWdvk2ij.jpg"
	},
	"/assets/watch._animeId._episodeId-CXznVJQL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"558e-MOloyedX2G0WkW1AhL1hKBPx3qo\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 21902,
		"path": "../public/assets/watch._animeId._episodeId-CXznVJQL.js"
	},
	"/assets/index-CRONVPYk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f26d-yFkJ9Fm4XY/XU7JenOFfjeLnOhQ\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 586349,
		"path": "../public/assets/index-CRONVPYk.js"
	},
	"/demo/demo-clip.webm": {
		"type": "video/webm",
		"etag": "\"fef49-QA2wsESxrrqye8GI43NxkuGwGXQ\"",
		"mtime": "2026-10-27T14:44:32.812Z",
		"size": 1044297,
		"path": "../public/demo/demo-clip.webm"
	},
	"/assets/library-0-ycEeJW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4aa-xiAXK9CaeuXN/v0vtZP3wzoR6sw\"",
		"mtime": "2026-10-27T14:44:32.116Z",
		"size": 1194,
		"path": "../public/assets/library-0-ycEeJW.js"
	},
	"/subtitles/demo-ar.vtt": {
		"type": "text/vtt; charset=utf-8",
		"etag": "\"1df-WTDFuggGyDWzX9YwJ3GaPDJXDrQ\"",
		"mtime": "2026-10-27T14:44:32.811Z",
		"size": 479,
		"path": "../public/subtitles/demo-ar.vtt"
	},
	"/assets/aistudio/arabic-anime-nights-main_9ba983df.zip": {
		"type": "application/zip",
		"etag": "\"18ed8f-fKRZRikacTJBDs6+UyECJO1TOxo\"",
		"mtime": "2026-10-27T14:44:32.812Z",
		"size": 1633679,
		"path": "../public/assets/aistudio/arabic-anime-nights-main_9ba983df.zip"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_6qWkqV = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_6qWkqV
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
