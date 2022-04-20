<script lang="ts">
	import { bookit_state } from './state';
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

	<BookDropMenu
		buttonText="Frame Bg"
		icon="frame"
		onUpdate={(color) => ($bookit_state.frameBg = color)}
		options={[
			{ label: 'Black', value: '#000' },
			{ label: 'White', value: '#fff' }
		]}
	>
		<label>
			<input type="checkbox" bind:checked={$bookit_state.checker} />
			Checker
		</label>
		<label>
			<input type="checkbox" bind:checked={$bookit_state.frameDash} />
			Dashed Border
		</label>
		<input type="text" bind:value={$bookit_state.frameBg} />
	</BookDropMenu>
	<BookDropMenu
		icon="size"
		buttonText="Size Presets"
		onUpdate={(size) => ($bookit_state.frameSize = size)}
		options={[
			{ label: 'Small 320px', value: [320, 'auto'] },
			{ label: 'iPhone 13 Pro Max', value: [428, 926] },
			{ label: 'Med 640px', value: [640, 'auto'] },
			{ label: 'Large 960px', value: [960, 'auto'] }
		]}
	>
		<div class="joint-input">
			<input type="number" bind:value={$bookit_state.frameSize[0]} /> x
			<input type="number" bind:value={$bookit_state.frameSize[1]} />
		</div>
	</BookDropMenu>
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

	.joint-input {
		display: flex;
		gap: 5px;
		align-items: center;
		color: white;
		justify-content: space-between;
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
