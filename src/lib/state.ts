import { writable } from 'svelte/store';

const newBookit = () => {
	const { subscribe, update, set } = writable<{
		canvasBg: string;
		checker: boolean;
		frameBg: string;
		frameDash: boolean;
		framePadding: number;
		frameSize: [number, number | string];
		selectedStory: any;
	}>({
		canvasBg: '#111',
		checker: false,
		frameBg: '#ffffff',
		frameDash: true,
		framePadding: 20,
		frameSize: [700, 'auto'],
		selectedStory: null
	});

	return {
		subscribe,
		update,
		set
	};
};

export const bookit_state = newBookit();
