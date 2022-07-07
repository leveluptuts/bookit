export function createTree() {
	const modules = import.meta.globEager('/**/*.story.svelte');

	const groupBy = (array, key) => {
		return array.reduce((result, obj) => {
			(result[obj[key]] = result[obj[key]] || []).push(obj);
			return result;
		}, {});
	};

	const tree = Object.keys(modules).map((key) => {
		return {
			id: key,
			title: modules[key].title,
			parent: modules[key].parent,
			component: modules[key].default,
			frames: {}
		};
	});
	return groupBy(tree, 'parent');
}
