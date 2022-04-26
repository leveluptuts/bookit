import { createTree } from './create_tree';

export async function layoutLoad({ params }) {
	const tree = createTree();
	return {
		stuff: {
			title: params.title,
			parent: params.parent,
			tree
		}
	};
}
