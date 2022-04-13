<script lang="ts">
	export let responsive = true;
	export let width = 700;
</script>

<div
	class="container"
	style:width={width + 'px'}
	style:overflow={responsive ? 'auto' : 'initial'}
	style:resize={responsive ? 'horizontal' : 'initial'}
>
	<slot />
</div>

<style lang="scss">
	.container {
		background: var(--bookit_bg, #fff);
		margin: 0 auto;
		border: solid 1px #ccc;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
	}
</style>
