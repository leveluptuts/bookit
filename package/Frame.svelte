<script>var _a, _b;
import Portal from './utils/Portal.svelte';
import { bookit_state } from './state';
export let responsive = true;
export let size = [700, 'auto'];
export let bg = '#ffffff';
export let padding = 20;
export let border = true;
export let checker = false;
export let title;
export let controls = null;
$bookit_state.loaded.frames[title] = { title, padding, border, bg, size, checker };
// Local controls are what passes the props from the "Controls" section to the slot props
// This makes props available to the story component
$: localControls = controls;
$: local_bg = $bookit_state.loaded.frames[title].bg;
$: local_size = $bookit_state.loaded.frames[title].size;
$: height = local_size[1] + (typeof local_size[1] === 'number' ? 'px' : '');
$: width = local_size[0] + (typeof local_size[0] === 'number' ? 'px' : '');
$: local_border = $bookit_state.loaded.frames[title].border;
$: local_checker = $bookit_state.loaded.frames[title].checker;
$: local_padding = $bookit_state.loaded.frames[title].padding;
$: if (title === ((_a = $bookit_state === null || $bookit_state === void 0 ? void 0 : $bookit_state.selectedStory) === null || _a === void 0 ? void 0 : _a.title)) {
    localControls = (_b = $bookit_state === null || $bookit_state === void 0 ? void 0 : $bookit_state.selectedStory) === null || _b === void 0 ? void 0 : _b.controls;
}
</script>

<div
	class="bookit_frame_wrapper"
	style:width
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
		style:padding={local_padding + 'px'}
		style={`--bookit_frame_bg: ${local_bg}`}
		class="bookit_frame"
		style:height
		style:width
		style:overflow={responsive ? 'auto' : 'initial'}
		style:resize={responsive ? 'horizontal' : 'initial'}
	>
		{#if local_checker}
			<svg class="checker" fill="none">
				<pattern id="checkerboard" width="64" height="64" patternUnits="userSpaceOnUse">
					<rect x="0" y="0" width="32" height="32" fill="rgb(0 0 0 / 0.3)" />
					<rect x="32" y="32" width="32" height="32" fill="rgb(0 0 0 / 0.3)" />
				</pattern>
				<rect x="0" y="0" width="100%" height="100%" fill="url(#checkerboard)" />
			</svg>
		{/if}
		<div class="bookit_content" style:border={local_border ? 'dashed 1px #999' : 'none'}>
			<Portal>
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
