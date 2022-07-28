<script lang="ts">
	import BookIcon from '../BookIcon.svelte';

	export let type: 'warning' | 'info' | 'correct' = 'info';
</script>

<div class={type}>
	<BookIcon name={type} />
	<p>
		<slot />
	</p>
</div>

<style>
	div {
		border: 1px solid #82d8d8;
		border-radius: 15px;
		padding: 20px;
		margin-bottom: 20px;
		background-color: #82d8d811;
		display: flex;
		gap: 20px;
	}

	.info :global(svg) :global(path) {
		fill: #82d8d8;
	}

	.correct {
		border: 1px solid #a8fe39;
		background-color: #a8fe3911;
	}

	.correct :global(svg) :global(path) {
		fill: #a8fe39;
	}

	.warning {
		border: 1px solid #eb5757;
		background-color: #eb575711;
	}
	.warning :global(svg) :global(path) {
		fill: #eb5757;
	}

	div p {
		line-height: 1.5;
	}
</style>
