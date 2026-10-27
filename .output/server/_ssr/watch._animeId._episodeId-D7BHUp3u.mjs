import { i as getAnime } from "./catalog-DM1krrJo.mjs";
import { _ as lazyRouteComponent, q as notFound, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/watch._animeId._episodeId-D7BHUp3u.js
var $$splitComponentImporter = () => import("./watch._animeId._episodeId-C_Je1tDx.mjs");
var Route = createFileRoute("/watch/$animeId/$episodeId")({
	loader: ({ params }) => {
		const anime = getAnime(params.animeId);
		if (!anime) throw notFound();
		const episode = anime.episodes.find((e) => e.id === params.episodeId);
		if (!episode) throw notFound();
		return {
			anime,
			episode
		};
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: loaderData ? `مشاهدة ${loaderData.anime.titleAr} — ANIME UG` : "غير متوفر — ANIME UG" },
		{
			name: "description",
			content: loaderData ? loaderData.anime.synopsisAr : "غير موجود."
		},
		{
			property: "og:title",
			content: loaderData ? `مشاهدة ${loaderData.anime.titleAr}` : "غير متوفر"
		},
		{
			property: "og:description",
			content: loaderData ? loaderData.anime.synopsisAr : "غير موجود."
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
