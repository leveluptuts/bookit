import { writable } from 'svelte/store';

const newBookit = () => {
	const { subscribe, update, set } = writable({
		canvasBg: '#ffffff',
		frameBg: '#ffffff',
		frameSize: 700,
		selectedStory: null
	});

	return {
		subscribe,
		update,
		set
	};
};

export const bookit_state = newBookit();
