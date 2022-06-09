import { writable } from 'svelte/store';

// The main store that keeps track of all Bookit's state

const newBookit = () => {
	const { subscribe, update, set } = writable<{
		canvasBg: string;
		checker: boolean;
		frameBg: string;
		frameDash: boolean;
		framePadding: number;
		frameSize: [number, number | string];
		selectedStory: any;
		loaded: {};
		tree: {
			[key: string]: {
				title: string;
				parent: string;
				icon: string;
			}[];
		};
	}>({
		canvasBg: '#111',
		checker: false,
		frameBg: '#ffffff',
		frameDash: true,
		framePadding: 20,
		frameSize: [700, 'auto'],
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
