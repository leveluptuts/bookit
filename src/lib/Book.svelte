<script lang="ts">
	import BookNav from './BookNav.svelte';
	import { getTree } from './get_tree';
	$: tree = getTree();
</script>

<div class="book-wrapper">
	<BookNav {tree} />
	<div class="book-canvas">
		<slot />
	</div>
</div>

<style lang="scss">
	.book-wrapper {
		background: var(--bookit_bg, #fcfcfc);
		display: grid;
		grid-template-columns: 1fr 5fr;
	}

	.book-canvas {
		padding: 20px;
	}
</style>
