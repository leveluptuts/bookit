import { getTree } from './get_tree';

export function getStory({ parent, title }) {
	const tree = getTree();
	const group = tree?.[parent];
	return group.find((item) => item.title === title);
}

export function load({ params }) {
	return {
		props: {
			params
		}
	};
}
