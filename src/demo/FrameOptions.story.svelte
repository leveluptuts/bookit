<script context="module" lang="ts">
	import { Canvas, Frame } from '$lib';
	import TestComponent from './TestComponent.svelte';

	export const title = 'Frame Options';
	export const parent = 'A Parent';
</script>

<Canvas>
	<Frame
		size={[200, 'auto']}
		bg="#333"
		checker={true}
		padding="40"
		title="With Frame Options"
		let:props
		controls={{
			title: 'Hello'
		}}
	>
		<TestComponent title={props.title} />
	</Frame>
</Canvas>
