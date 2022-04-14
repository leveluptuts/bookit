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
	/>
	<BookDropMenu
		bind:input={$bookit_state.frameSize}
		buttonText="Size Presets"
		onUpdate={(size) => ($bookit_state.frameSize = size)}
		options={[
			{ label: 'Small 320px', value: 320 },
			{ label: 'iPhone 13 Pro Max', value: 428 },
			{ label: 'Med 640px', value: 640 },
			{ label: 'Large 960px', value: 960 }
		]}
	/>
</div>

<style>
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
