<script lang="ts">
	import Portal from './utils/Portal.svelte';
	import { bookit_state } from './state';
	export let responsive = true;
	export let size: [number, string | number] = [700, 'auto'];
	export let canvas_bg = '#111';
	export let bg = '#ffffff';
	export let padding = 20;
	export let boarder = true;
	export let checker = false;
	export let title: string = 'Frame';
	export let controls;

	// Local controls are what passes the props from the "Controls" section to the slot props
	// This makes props available to the story component
	$: localControls = controls;

	$: {
		$bookit_state.frameSize = size;
		$bookit_state.framePadding = padding;
		$bookit_state.canvasBg = canvas_bg;
		$bookit_state.frameBg = bg;
		$bookit_state.checker = checker;
		$bookit_state.frameDash = boarder;
	}

	$: if (title === $bookit_state?.selectedStory?.title) {
		localControls = $bookit_state?.selectedStory?.controls;
	}

	let iframeRef: HTMLIFrameElement;

	let sandbox;
	$: if (typeof window !== 'undefined') {
		sandbox = window?.location?.origin + '/book/sandbox?story=' + title;
		console.log('sandbox', sandbox);
	}
</script>

<div
	class="bookit_frame_wrapper"
	style:width={$bookit_state.frameSize[0] +
		(typeof $bookit_state.frameSize[0] === 'number' ? 'px' : '')}
	class:selected={$bookit_state?.selectedStory?.title === title}
	on:click={() =>
		($bookit_state.selectedStory = {
			title,
			controls
		})}
>
	<h4>{title}</h4>
	<div
		on:click={() =>
			($bookit_state.selectedStory = {
				title,
				controls
			})}
		style:padding={$bookit_state.framePadding + 'px'}
		style={`--bookit_frame_bg: ${$bookit_state.frameBg}`}
		class="bookit_frame"
		style:height={$bookit_state.frameSize[1] +
			(typeof $bookit_state.frameSize[1] === 'number' ? 'px' : '')}
		style:width={$bookit_state.frameSize[0] +
			(typeof $bookit_state.frameSize[0] === 'number' ? 'px' : '')}
		style:overflow={responsive ? 'auto' : 'initial'}
		style:resize={responsive ? 'horizontal' : 'initial'}
	>
		{#if $bookit_state.checker}
			<svg class="checker" fill="none">
				<pattern id="checkerboard" width="64" height="64" patternUnits="userSpaceOnUse">
					<rect x="0" y="0" width="32" height="32" fill="rgb(0 0 0 / 0.3)" />
					<rect x="32" y="32" width="32" height="32" fill="rgb(0 0 0 / 0.3)" />
				</pattern>
				<rect x="0" y="0" width="100%" height="100%" fill="url(#checkerboard)" />
			</svg>
		{/if}
		<div class="bookit_content" style:border={$bookit_state.frameDash ? 'dashed 1px #999' : 'none'}>
			{#if iframeRef}
				<iframe bind:this={iframeRef} />
			{/if}

			<Portal target={iframeRef}>
				<slot props={localControls} />
			</Portal>
		</div>
	</div>
</div>

<style>
	.checker {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		pointer-events: none;
	}

	.bookit_content {
		position: relative;
		z-index: 1;
	}

	.bookit_frame_wrapper {
		margin-top: 20px;
		position: relative;
	}

	.bookit_frame {
		background: var(--bookit_frame_bg);
		margin: 0 auto;
		box-shadow: 3px 3px 10px rgb(0 0 0 / 0.6);
		position: relative;
		z-index: 1;
		border-radius: 5px;
	}

	h4 {
		color: #fff;
		margin: 0;
		padding: 7px;
		font-family: monospace;
		font-weight: 500;
		position: absolute;
		top: -25px;
		font-size: 12px;
		opacity: 0.6;
	}

	.bookit_frame_wrapper.selected h4 {
		color: var(--bookit_accent, #f0c05e);
	}

	.bookit_frame_wrapper.selected .bookit_frame {
		outline: 1px solid var(--bookit_accent, #f0c05e);
	}

	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
