<script lang="ts">
	export let responsive = true
	export let width = 700
</script>

<div
	style:width={width + 'px'}
	style:overflow={responsive ? 'auto' : 'initial'}
	style:resize={responsive ? 'horizontal' : 'initial'}
>
	<slot />
</div>

<style lang="scss">
	div {
		background: white;
		margin: 0 auto;
		border: solid 1px #333;
	}
</style>
