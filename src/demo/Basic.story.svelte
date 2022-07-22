<script context="module" lang="ts">
	import { Canvas, Frame } from '$lib';

	import TestComponent from './TestComponent.svelte';

	export const title = 'Basic';
	export const parent = 'Components';
</script>

<Canvas>
	<Frame title="Basic Component">
		<TestComponent title="Hello World" />
	</Frame>
</Canvas>
