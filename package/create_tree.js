export function createTree() {
    const modules = import.meta.glob('/**/*.story.svelte', { eager: true });
    const modules_raw = import.meta.glob('/**/*.story.svelte', { eager: true, as: 'raw' });
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
            raw: modules_raw[key],
            frames: {}
        };
    });
    return groupBy(tree, 'parent');
}
