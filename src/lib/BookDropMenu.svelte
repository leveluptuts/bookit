<script lang="ts">
	export let buttonText = 'Click Me!';
	export let onUpdate;
	export let options;
	export let input;

	let is_active = false;
</script>

<div class="bookit-container">
	<button on:click={() => (is_active = !is_active)}>{buttonText}</button>
	{#if is_active}
		<div class="bookit_drop_menu">
			<slot />
			<input type="text" bind:value={input} />
			{#each options as option}
				<button on:click={() => onUpdate(option.value)}>{option.label}</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	button {
		background: transparent;
		padding: 5px 10px;
		border: var(--bookit_line);
		color: white;
		font-weight: 400;
		font-family: monospace;
	}

	input {
		background-color: transparent;
		border-radius: 0.25rem;
		border: var(--bookit_line);
		color: white;
	}

	button:hover {
		background: rgb(0 0 0 / 0.3);
	}

	.bookit-container {
		position: relative;
	}
	.bookit_drop_menu {
		position: absolute;
		background-color: var(--bookit_bg);
		background: var(--bookit_bg, #222);
		box-shadow: 3px 3px 10px rgb(0 0 0 / 0.6);
		border-radius: 5px;
		width: 160px;
		right: 0;
		z-index: 10;
		border: var(--bookit_line);
	}

	.bookit_drop_menu button {
		margin: 0;
		border: none;
		border-radius: 0;
		display: block;
		width: 100%;
	}
</style>
