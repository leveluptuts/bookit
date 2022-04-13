import { page } from '$app/stores'
import { get } from 'svelte/store'

export function getTree() {
	return get(page).stuff.tree
}
