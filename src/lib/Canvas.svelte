<script lang="ts">
	import { onMount } from 'svelte';
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import { bookit_state } from './state';
	import FrameControls from './FrameControls.svelte';
	import Controls from './Controls.svelte';
	import BookHeader from './BookHeader.svelte';
	import Code from './Code.svelte';

	// props
	export let canvas_bg = '#111';
	onMount(() => {
		// If you pass canvas_bg as a prop, it will update the
		// global state store
		$bookit_state.canvasBg = canvas_bg;
	});
</script>

<div style:height="100%">
	<BookHeader />
	<div class="bookit_canvas" style={`--bookit_canvas_bg: ${$bookit_state.canvasBg}`}>
		<Splitpanes theme="level-up-split">
			<Pane>
				<Splitpanes horizontal={true} theme="level-up-split">
					<Pane size={$bookit_state.code === 'VISIBLE' ? '80' : '100'}>
						<div class="bookit_viewport">
							<slot />
						</div>
					</Pane>
					{#if $bookit_state.code === 'VISIBLE'}
						<Pane size="20">
							<Code />
						</Pane>
					{/if}
				</Splitpanes>
			</Pane>
			{#if $bookit_state?.selected_frame?.title}
				<Pane size="20">
					<FrameControls />
					<Controls />
				</Pane>
			{/if}
		</Splitpanes>
	</div>
</div>

<style>
	:global(body) {
		--toy-color-int: var(--toy-color, hsla(0, 0%, 20%, 1));
		--toy-background-int: var(--toy-bg, white);
		--toy-header-bg: hsla(0, 0%, 95%, 1);
		--toy-color: hsla(0, 0%, 80%, 1);
		--toy-background-int: hsla(241, 6%, 15%, 1);
		--toy-nub-bg: var(--toy-background-int);
		--toy-highlight: hsla(0, 0%, 25%, 1);
		--toy-lowlight: hsla(0, 0%, 5%, 1);
		--toy-header-bg: hsla(0, 0%, 10%, 1);
		--toy-color: hsla(0, 0%, 80%, 1);
		--toy-background-int: hsla(241, 6%, 15%, 1);
		--toy-nub-bg: var(--toy-background-int);
		--toy-highlight: hsla(0, 0%, 25%, 1);
		--toy-header-bg: hsla(0, 0%, 10%, 1);
		--toy-value-color: hsla(310, 99%, 74%, 1);
		--toy-key-color: hsla(208, 99%, 73%, 1);
	}

	.bookit_canvas {
		background: var(--bookit_canvas_bg);
		height: 100%;
	}

	.bookit_viewport {
		padding: 20px;
		height: 100vh;
		overflow-y: scroll;
		display: flex;
		gap: 10px;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;
	}
</style>
