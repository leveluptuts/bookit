export function createTree() {
	const modules = import.meta.globEager('/**/*.story.svelte');
	// const test = import.meta.globEager('$lib/**/*.story.svelte', {
	// 	assert: { type: 'raw' }
	// });

	const groupBy = (array, key) => {
		return array.reduce((result, obj) => {
			(result[obj[key]] = result[obj[key]] || []).push(obj);
			return result;
		}, {});
	};

	const tree = Object.keys(modules).map((key) => {
		return {
			controls: modules[key]?.controls,
			title: modules[key].title,
			parent: modules[key].parent,
			component: modules[key].default
		};
	});
	return groupBy(tree, 'parent');
}
