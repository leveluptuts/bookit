<div class="book-container">
	<h4>Props</h4>
	<div class="props">
		<slot />
	</div>
</div>

<style>
	h4 {
		height: var(--bookit_header_height);
		font-family: monospace;
		margin: 0;
		padding: 8px;
		border-bottom: var(--bookit_line);
		color: white;
	}

	.book-container {
		height: 100%;
		border-left: var(--bookit_line);
		background: var(--bookit_props_bg, rgba(0, 0, 0, 0.12));
	}

	.props {
		padding: 20px;
	}
</style>
