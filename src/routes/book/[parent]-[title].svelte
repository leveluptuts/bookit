<script context="module" lang="ts">
	import { getStory, load } from '$lib';
	import { bookit_state } from '$lib';
	export { load };
</script>

<script lang="ts">
	export let params;
	getStory(params).then((story) => {
		console.log('story', story);
		$bookit_state.loaded = story;
	});
	$: console.log('$bookit_state.loaded', $bookit_state.loaded);
</script>

{#if $bookit_state?.loaded?.component}
	<svelte:component this={$bookit_state.loaded.component} />
{/if}
