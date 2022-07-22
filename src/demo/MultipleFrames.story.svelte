<script context="module" lang="ts">
	import { Canvas, Frame } from '$lib';
	import TestComponent from './TestComponent.svelte';

	export const title = 'Multi Frames';
	export const parent = 'Components';
</script>

<Canvas>
	<Frame
		title="First Frame"
		let:props
		controls={{
			title: 'Hello, you can control me'
		}}
	>
		<TestComponent title={props.title} />
	</Frame>
	<Frame
		size={[300, 300]}
		checker={true}
		bg="blue"
		title="Second Frame"
		let:props
		controls={{
			title: 'Hello, you can control me TOO'
		}}
	>
		<TestComponent title={props.title} />
	</Frame>
</Canvas>
