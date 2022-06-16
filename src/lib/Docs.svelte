<div class="bookit-docs">
	<slot />
</div>

<style lang="scss">
	.bookit-docs {
		width: 100%;
		color: #fff;
	}

	:global(h1, h2, h3, h4, h5) {
		margin: 3rem 0 1.38rem;
		line-height: 1.3;
	}

	:global(.bookit-docs > h1) {
		margin-top: 0;
		font-size: 3.052rem;
	}

	:global(.bookit-docs > h2) {
		font-size: 2.441rem;
	}

	:global(.bookit-docs > h3) {
		font-size: 1.953rem;
	}

	:global(.bookit-docs > h4) {
		font-size: 1.563rem;
	}

	:global(.bookit-docs > h5) {
		font-size: 1.25rem;
	}
	:global(.bookit-docs > p) {
		margin-bottom: 1rem;
		max-width: 680px;
		line-height: 1.5;
	}
</style>
