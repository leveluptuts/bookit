<script lang="ts">
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import BookNav from './BookNav.svelte';
	import { bookit_state } from './state';
</script>

<div class="book-wrapper">
	<Splitpanes theme="level-up-split">
		<Pane size={$bookit_state.nav === 'VISIBLE' ? '15' : '0'}>
			<BookNav />
		</Pane>
		<Pane size={$bookit_state.nav === 'VISIBLE' ? '85' : '100'}>
			<slot />
		</Pane>
	</Splitpanes>
</div>

<style global>
	.book-wrapper {
		--bookit_header_height: 40px;
		--bookit_line_color: rgb(255 255 255 / 0.1);
		--bookit_line: solid 0.5px var(--bookit_line_color);
		background: var(--bookit_bg, #111);
		height: 100vh;
	}

	:global(.splitpanes.level-up-split.splitpanes--vertical) > :global(.splitpanes__splitter) {
		transition: 0.3s ease width;
		background-color: var(--bookit_line_color);
		width: 2px;
		cursor: col-resize;
	}

	:global(.splitpanes.level-up-split.splitpanes--vertical) > :global(.splitpanes__splitter:hover) {
		background-color: #f0c05e;
		position: relative;
		width: 6px;
		opacity: 0.6;
	}

	:global(.splitpanes.level-up-split.splitpanes--horizontal) > :global(.splitpanes__splitter) {
		transition: 0.3s ease width;
		background-color: var(--bookit_line_color);
		height: 2px;
		cursor: row-resize;
	}

	:global(.splitpanes.level-up-split.splitpanes--horizontal)
		> :global(.splitpanes__splitter:hover) {
		background-color: #f0c05e;
		position: relative;
		height: 6px;
		opacity: 0.6;
	}
</style>
