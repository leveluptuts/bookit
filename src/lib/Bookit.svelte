<script lang="ts">
	import { getStory } from './get_story';
	import { bookit_state } from './state';

	export let params;
	$: getStory(params).then((story) => {
		$bookit_state.loaded = story;
	});
</script>

{#if $bookit_state?.loaded?.component}
	<svelte:component this={$bookit_state.loaded.component} />
{/if}
