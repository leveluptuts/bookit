// Layout load is the load function that finds all stories,
// and scoops them up and puts them in stuff
// For internal pages, it adds the title and parent from the url params

import { createTree } from './create_tree';
import { bookit_state } from './state';

export async function layoutLoad({ params }: { params?: { title: string; parent: string } }) {
	bookit_state.init(async () => createTree());
	return {};
}
