<script>import { bookit_state } from './state';
import BookDropMenu from './BookDropMenu.svelte';
</script>

<div class="wrapper">
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
	<button on:click={() => ($bookit_state.code = 'VISIBLE')}> Show Code </button>
	<button on:click={() => ($bookit_state.code = 'HIDDEN')}> Hide Code </button>
</div>

<style>
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
