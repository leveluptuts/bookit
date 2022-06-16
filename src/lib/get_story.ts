import { get } from 'svelte/store';
import { bookit_state } from './state';

// Takes parent and title and plucks the correct
// story from the treecd
export async function getStory({ parent, title }) {
	const tree = get(bookit_state).tree;
	const group = tree?.[parent];

	if (group) {
		const found_story = group.find((item) => item.title === title);
		// const raw = await import(found_story.id + '?raw');
		// const raw_default = raw.default;
		// found_story.raw = raw_default;
		return found_story;
	} else {
		return null;
	}
}

export function load({ params }) {
	return {
		props: {
			params
		}
	};
}
