import { createTree } from './create_tree';

export async function layoutLoad() {
	const tree = createTree();
	return {
		stuff: {
			tree
		}
	};
}
