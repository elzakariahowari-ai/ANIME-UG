import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-D1rdOLxH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var FAV_KEY = "anime-ug:favorites";
var HIST_KEY = "anime-ug:history";
var MAX_HISTORY = 200;
var serverSnapshot = {
	favorites: [],
	history: []
};
var state = {
	favorites: [],
	history: []
};
var hydrated = false;
var listeners = /* @__PURE__ */ new Set();
function hydrate() {
	if (hydrated || typeof window === "undefined") return;
	hydrated = true;
	try {
		state = {
			favorites: JSON.parse(localStorage.getItem(FAV_KEY) ?? "[]"),
			history: JSON.parse(localStorage.getItem(HIST_KEY) ?? "[]")
		};
	} catch {
		state = {
			favorites: [],
			history: []
		};
	}
}
function persist() {
	if (typeof window === "undefined") return;
	localStorage.setItem(FAV_KEY, JSON.stringify(state.favorites));
	localStorage.setItem(HIST_KEY, JSON.stringify(state.history));
}
function emit() {
	for (const listener of listeners) listener();
}
function subscribe(cb) {
	hydrate();
	listeners.add(cb);
	return () => listeners.delete(cb);
}
function getSnapshot() {
	if (!hydrated) {
		if (typeof window === "undefined") return serverSnapshot;
		hydrate();
	}
	return state;
}
function update(mutate) {
	hydrate();
	const draft = {
		favorites: [...state.favorites],
		history: [...state.history]
	};
	mutate(draft);
	state = draft;
	persist();
	emit();
}
function toggleFavorite(animeId) {
	update((draft) => {
		draft.favorites = draft.favorites.includes(animeId) ? draft.favorites.filter((id) => id !== animeId) : [animeId, ...draft.favorites];
	});
}
function saveProgress(entry) {
	update((draft) => {
		draft.history = [entry, ...draft.history.filter((h) => !(h.animeId === entry.animeId && h.episodeId === entry.episodeId))].slice(0, MAX_HISTORY);
	});
}
function clearHistory() {
	update((draft) => {
		draft.history = [];
	});
}
function useLibrary() {
	return (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, () => serverSnapshot);
}
function getProgress(library, animeId, episodeId) {
	return library.history.find((h) => h.animeId === animeId && h.episodeId === episodeId);
}
//#endregion
export { useLibrary as a, toggleFavorite as i, getProgress as n, saveProgress as r, clearHistory as t };
