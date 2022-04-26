<script context="module" lang="ts">
	import { getStory, load } from '$lib';
	export { load };
</script>

<script lang="ts">
	export let params;
	console.log('params', params);
	$: story = getStory(params);
</script>

<svelte:component this={story.component} />
