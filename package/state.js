import { writable } from 'svelte/store';
// The main store that keeps track of all Bookit's state
const newBookit = () => {
    const { subscribe, update, set } = writable({
        canvasBg: '#111',
        selectedStory: null,
        tree: {},
        loaded: {}
    });
    return {
        subscribe,
        update,
        set,
        init: async (data) => {
            const tree = await data();
            set({ tree });
        }
    };
};
export const bookit_state = newBookit();
// State //
// Tree[]
// - id aka importpath x
// - Name x
// - Parent x
// Canvas
// Bg
// Checker
// Selected Story ID
// Loaded Stories[]
// - Title
// - Parent
// - Id
// - Raw Code
// - Code without Bookit Imports
// - FrameBg
// - FrameDash
// - FramePadding
// - FrameSize
// - Controls?
