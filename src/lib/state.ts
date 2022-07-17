import { writable } from 'svelte/store';

// The main store that keeps track of all Bookit's state
const IS_SERVER: boolean = typeof window === 'undefined';

type BookitInterfaceStatus = 'VISIBLE' | 'HIDDEN';

function local_storage_checker<T>(initial: T, key: string): T {
	if (!IS_SERVER) {
		const local_storage_data = localStorage.getItem(key);
		if (local_storage_data) {
			return local_storage_data as unknown as T;
		} else {
			localStorage.setItem(key, initial as unknown as string);
		}
	}
	return initial;
}

const newBookit = () => {
	// Initialize Nav based on local storage
	const initial_nav = local_storage_checker<BookitInterfaceStatus>('VISIBLE', 'BOOKIT_NAV');
	const initial_code = local_storage_checker<BookitInterfaceStatus>('HIDDEN', 'BOOKIT_CODE');

	const { subscribe, update, set } = writable<{
		canvasBg: string;
		selected_frame: any;
		code: BookitInterfaceStatus;
		nav: BookitInterfaceStatus;
		loaded: {};
		tree: {
			[key: string]: {
				title: string;
				parent: string;
				icon: string;
			}[];
		};
	}>({
		code: initial_code,
		nav: initial_nav,
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
		},
		toggleCode: () => {
			update((prev) => {
				const new_code = prev.code === 'VISIBLE' ? 'HIDDEN' : 'VISIBLE';
				localStorage.setItem('BOOKIT_CODE', new_code);
				return { ...prev, code: new_code };
			});
		},

		toggleNav: () => {
			update((prev) => {
				const new_nav = prev.nav === 'VISIBLE' ? 'HIDDEN' : 'VISIBLE';
				localStorage.setItem('BOOKIT_NAV', new_nav);
				return { ...prev, nav: new_nav };
			});
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
