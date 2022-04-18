<script lang="ts">
	export let options;
	export let selected;
	export let label;
</script>

<div>
	<label>
		<span>{label}</span>
		<select bind:value={selected}>
			{#each options as option}
				<option value={option}>
					{option}
				</option>
			{/each}
		</select>
	</label>
</div>

<style>
	label span {
		color: white;
		font-size: 12px;
		margin-bottom: 5px;
		display: block;
	}

	select {
		background-color: transparent;
		border-radius: 0.25rem;
		width: 100%;
		color: white;
		border: var(--bookit_line);
	}

	div {
		margin-bottom: 5px;
	}
</style>
