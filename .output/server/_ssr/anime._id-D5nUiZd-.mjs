import { i as getAnime } from "./catalog-DM1krrJo.mjs";
import { _ as lazyRouteComponent, q as notFound, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/anime._id-D5nUiZd-.js
var $$splitComponentImporter = () => import("./anime._id-Cum__7tq.mjs");
var Route = createFileRoute("/anime/$id")({
	loader: ({ params }) => {
		const anime = getAnime(params.id);
		if (!anime) throw notFound();
		return { anime };
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: loaderData ? `${loaderData.anime.titleAr} — ANIME UG` : "غير متوفر — ANIME UG" },
		{
			name: "description",
			content: loaderData ? loaderData.anime.synopsisAr : "صفحة عمل غير موجودة."
		},
		{
			property: "og:title",
			content: loaderData ? `${loaderData.anime.titleAr} — ANIME UG` : "غير متوفر"
		},
		{
			property: "og:description",
			content: loaderData ? loaderData.anime.synopsisAr : "صفحة عمل غير موجودة."
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
//#endregion
export { Route as t };
