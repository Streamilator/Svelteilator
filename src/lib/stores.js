import { writable } from "svelte/store";

export const now_playing_title = writable("nothing is playing");
export const now_playing_author = writable("");
