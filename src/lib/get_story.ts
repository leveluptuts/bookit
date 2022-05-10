import { getTree } from './get_tree';

// Takes parent and title and plucks the correct
// story from the tree
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
