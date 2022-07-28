<script lang="ts">
	import { slide } from 'svelte/transition';
	import ControlsRow from './ControlsRow.svelte';
	import SideBarHeading from './elements/SideBarHeading.svelte';
	import { bookit_state } from './state';

	$: selected_title = $bookit_state?.selected_frame;

	let is_toggled = true;
</script>

<SideBarHeading on:click={() => (is_toggled = !is_toggled)}>🛠️ Controls</SideBarHeading>

{#if is_toggled}
	<div transition:slide>
		{#if $bookit_state?.loaded.frames?.[selected_title]?.controls}
			{#each Object.entries($bookit_state.loaded.frames[selected_title]?.controls) as [key, value]}
				<ControlsRow {key} {value} path={key} />
			{/each}
		{/if}
	</div>
{/if}
