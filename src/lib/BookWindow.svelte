<script lang="ts">
	import { bookit_state } from './state';
	import BookHeader from './BookHeader.svelte';
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	export let responsive = true;
	export let width = 700;
	export let canvas_bg = '#111';
	export let frame_bg = '#fff';

	$: $bookit_state.frameSize = width;
	$: $bookit_state.canvasBg = canvas_bg;
	$: $bookit_state.frameBg = frame_bg;
</script>

<Splitpanes>
	<Pane>
		<div style:height="100%">
			<BookHeader />
			<div class="book-canvas" style={`--bookit_canvas_bg: ${$bookit_state.canvasBg}`}>
				<h4>Component Name</h4>
				<div>
					<div
						style={`--bookit_frame_bg: ${$bookit_state.frameBg}`}
						class="bookit_frame"
						style:width={$bookit_state.frameSize + 'px'}
						style:overflow={responsive ? 'auto' : 'initial'}
						style:resize={responsive ? 'horizontal' : 'initial'}
					>
						<slot />
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
	.book-canvas {
		padding: 20px;
		background: var(--bookit_canvas_bg);
		height: 100%;
	}

	.bookit_frame {
		background: var(--bookit_frame_bg);
		margin: 0 auto;
		box-shadow: 3px 3px 10px rgb(0 0 0 / 0.6);
		position: relative;
	}

	h4 {
		color: #fff;
		margin: 0;
		padding: 7px;
		font-family: monospace;
		font-weight: 500;
	}
</style>
