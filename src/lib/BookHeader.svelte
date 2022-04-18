<script lang="ts">
	import { bookit_state } from './state';
	import BookDropMenu from './BookDropMenu.svelte';
</script>

<div class="wrapper">
	<BookDropMenu
		bind:input={$bookit_state.canvasBg}
		buttonText="Canvas Bg"
		onUpdate={(color) => ($bookit_state.canvasBg = color)}
		options={[
			{ label: 'Black', value: '#000' },
			{ label: 'White', value: '#fff' }
		]}
	/>

	<BookDropMenu
		bind:input={$bookit_state.frameBg}
		buttonText="Frame Bg"
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
	</BookDropMenu>
	<BookDropMenu
		bind:input={$bookit_state.frameSize}
		buttonText="Size Presets"
		onUpdate={(size) => ($bookit_state.frameSize = size)}
		options={[
			{ label: 'Small 320px', value: [320, 'auto'] },
			{ label: 'iPhone 13 Pro Max', value: [428, 926] },
			{ label: 'Med 640px', value: [640, 'auto'] },
			{ label: 'Large 960px', value: [960, 'auto'] }
		]}
	/>
</div>

<style>
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
