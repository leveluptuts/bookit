<script>import ControlsRow from './ControlsRow.svelte';
import { bookit_state } from './state';
export let controls = {};
</script>

<h4>🛠️ Controls</h4>

{#if $bookit_state?.selected_frame?.controls}
	{#each Object.entries($bookit_state?.selected_frame?.controls) as [key, value]}
		<ControlsRow {key} {value} path={key} />
	{/each}
{/if}

<style>
	h4 {
		height: var(--bookit_header_height);
		font-family: monospace;
		margin: 0;
		padding: 8px 20px;
		border-bottom: var(--bookit_line);
		color: var(--bookit_color, white);
	}
</style>
