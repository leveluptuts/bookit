import { createTree } from '@leveluptuts/bookit';

export async function layoutLoad() {
	const tree = createTree();
	return {
		stuff: {
			tree
		}
	};
}
