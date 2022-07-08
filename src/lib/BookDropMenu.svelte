<script lang="ts">
	import BookIcon from './BookIcon.svelte';

	export let buttonText = 'Click Me!';
	export let onUpdate;
	export let options;

	export let icon: 'frame' | 'component' | 'size' | 'canvas' | null = null;

	let is_active = false;
</script>

<div class="bookit-container">
	<button on:click={() => (is_active = !is_active)}>
		{#if icon}
			<BookIcon name={icon} />
		{/if}
		{buttonText}</button
	>
	{#if is_active}
		<div class="bookit_drop_menu">
			<slot />

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
		font-size: 12px;
		font-family: monospace;
		display: flex;
		gap: 5px;
		align-items: center;
		border-radius: 0.25rem;
		width: 160px;
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
