<script lang="ts">
	export let active: boolean = false;
</script>

<h4 class:active>
	<slot />
</h4>

<style>
	h4 {
		height: var(--bookit_header_height);
		font-family: monospace;
		margin: 0;
		padding: 8px 10px;
		border-bottom: var(--bookit_line);
		color: var(--bookit_color, white);
		border-top: var(--bookit_line);
		display: flex;
		align-items: center;
		gap: 10px;
		background: rgba(255, 255, 255, 0.02);
		margin-bottom: 5px;
		box-shadow: var(--level-2, 0 2px 3px rgba(0, 0, 0, 0.1), 0 1px 5px rgba(0, 0, 0, 0.13));
	}
	h4.active {
		background: rgba(255, 255, 255, 0.1);
	}
</style>
