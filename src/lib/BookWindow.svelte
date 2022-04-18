<script lang="ts">
	import { bookit_state } from './state';
	import BookHeader from './BookHeader.svelte';
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	export let responsive = true;

	export let width: [number, string | number] = [700, 'auto'];
	export let canvas_bg = '#111';
	export let frame_bg = '#ffffff';
	export let frame_padding = 20;
	export let checker = false;

	$: {
		$bookit_state.frameSize = width;
		$bookit_state.framePadding = frame_padding;
		$bookit_state.canvasBg = canvas_bg;
		$bookit_state.frameBg = frame_bg;
		$bookit_state.checker = checker;
	}
</script>

<Splitpanes>
	<Pane>
		<div style:height="100%">
			<BookHeader />
			<div class="bookit_canvas" style={`--bookit_canvas_bg: ${$bookit_state.canvasBg}`}>
				<h4>Component Name</h4>
				<div>
					<div
						style:padding={$bookit_state.framePadding + 'px'}
						style={`--bookit_frame_bg: ${$bookit_state.frameBg}`}
						class="bookit_frame"
						style:height={$bookit_state.frameSize[1] +
							(typeof $bookit_state.frameSize[1] === 'number' ? 'px' : '')}
						style:width={$bookit_state.frameSize[0] + 'px'}
						style:overflow={responsive ? 'auto' : 'initial'}
						style:resize={responsive ? 'horizontal' : 'initial'}
					>
						{#if $bookit_state.checker}
							<svg class="checker" fill="none"
								><pattern id="checkerboard" width="64" height="64" patternUnits="userSpaceOnUse"
									><rect x="0" y="0" width="32" height="32" fill="rgb(0 0 0 / 0.3)" /><rect
										x="32"
										y="32"
										width="32"
										height="32"
										fill="rgb(0 0 0 / 0.3)"
									/></pattern
								><rect x="0" y="0" width="100%" height="100%" fill="url(#checkerboard)" /></svg
							>
						{/if}
						<div class="bookit_content">
							<slot />
						</div>
					</div>
				</div>
			</div>
		</div>
	</Pane>
	<Pane size="20">
		<slot name="props" />
	</Pane>
</Splitpanes>

<style lang="scss">
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
		border: dashed 1px #999;
	}

	.bookit_canvas {
		padding: 20px;
		background: var(--bookit_canvas_bg);
		height: 100%;
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
	}
</style>
