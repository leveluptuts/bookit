<script lang="ts">
	export let value;
	export let label;
</script>

<div>
	<label>
		<span>{label}</span>
		<input type="text" bind:value />
	</label>
</div>

<style>
	label span {
		color: white;
		font-size: 12px;
		margin-bottom: 5px;
		display: block;
	}

	input {
		background-color: transparent;
		border-radius: 0.25rem;
		border: var(--bookit_line);
		color: white;
	}

	div {
		margin-bottom: 5px;
	}
</style>
