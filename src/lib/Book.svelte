<script lang="ts">
	import BookNav from './BookNav.svelte';
	import { getTree } from './get_tree';
	$: tree = getTree();
</script>

<div class="book-wrapper">
	<BookNav {tree} />
	<div>
		<slot />
	</div>
</div>

<style lang="scss">
	.book-wrapper {
		display: grid;
		grid-template-columns: 1fr 5fr;
	}
</style>
