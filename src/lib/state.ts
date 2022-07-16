import { writable } from 'svelte/store';

// The main store that keeps track of all Bookit's state

const newBookit = () => {
	const { subscribe, update, set } = writable<{
		canvasBg: string;
		selected_frame: any;
		code: 'VISIBLE' | 'HIDDEN';
		loaded: {};
		tree: {
			[key: string]: {
				title: string;
				parent: string;
				icon: string;
			}[];
		};
	}>({
		code: 'VISIBLE',
		canvasBg: '#111',
		selected_frame: null,
		tree: {},
		loaded: {}
	});

	return {
		subscribe,
		update,
		set,
		init: async (data) => {
			const tree = await data();
			update((prev) => ({ ...prev, tree }));
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
