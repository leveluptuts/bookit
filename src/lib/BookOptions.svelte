<script lang="ts">
	export let options
	export let selected
</script>

<select bind:value={selected}>
	{#each options as option}
		<option value={option}>
			{option}
		</option>
	{/each}
</select>
