<script lang="ts">
	import ControlsRow from './ControlsRow.svelte';
	import SideBarHeading from './elements/SideBarHeading.svelte';
	import { bookit_state } from './state';
</script>

<SideBarHeading>🛠️ Controls</SideBarHeading>

{#if $bookit_state?.selected_frame?.controls}
	{#each Object.entries($bookit_state?.selected_frame?.controls) as [key, value]}
		<ControlsRow {key} {value} path={key} />
	{/each}
{/if}
