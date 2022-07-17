<script lang="ts">
	import { bookit_state } from './state';
	import BookDropMenu from './BookDropMenu.svelte';
	import BookIcon from './BookIcon.svelte';
</script>

<div class="wrapper">
	<button
		class="nav_toggle"
		class:open={$bookit_state.nav === 'VISIBLE'}
		on:click={bookit_state.toggleNav}
	>
		<BookIcon name="chev" />
	</button>
	<BookDropMenu
		icon="canvas"
		buttonText="Canvas Bg"
		onUpdate={(color) => ($bookit_state.canvasBg = color)}
		options={[
			{ label: 'Black', value: '#000' },
			{ label: 'White', value: '#fff' }
		]}
	>
		<input type="text" bind:value={$bookit_state.canvasBg} />
	</BookDropMenu>
	<button on:click={bookit_state.toggleCode}
		><BookIcon name="code" /> {$bookit_state.code === 'HIDDEN' ? 'Show' : 'Hide'} Code
	</button>
</div>

<style>
	.nav_toggle {
		position: absolute;
		left: 0;
		width: auto;
	}

	.nav_toggle :global(svg) {
		transition: 0.3s ease transform;
	}

	.nav_toggle.open :global(svg) {
		transform: rotate(180deg);
	}

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

	input {
		background-color: transparent;
		border-radius: 0.25rem;
		border: var(--bookit_line);
		color: white;
	}

	label {
		color: white;
		font-size: 14px;
		font-family: monospace;
	}

	.wrapper {
		position: relative;
		border-bottom: var(--bookit_line);
		height: var(--bookit_header_height);
		background-color: var(--bookit_header_bg, #111);
		display: flex;
		gap: 10px;
		padding: 0 10px;
		justify-content: flex-end;
		align-items: center;
	}
</style>
