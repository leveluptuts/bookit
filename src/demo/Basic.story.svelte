<script context="module" lang="ts">
	import { Canvas, Frame, Docs } from '$lib';
	import TestComponent from './TestComponent.svelte';

	export const title = 'Basic';
	export const parent = 'A Parent';
</script>

<Canvas>
	<Docs>
		<h1>Docs</h1>
		<p>This is a basic Docs component that allows you to write docs within your stories.</p>
		<p>Below is a Frame that includes a component. A frame is a way to group related components.</p>
		<p>
			Both Docs and Frames live within a Canvas component. The canvas is where your frames and docs
			live and is the main area where you put your components. A canvas can be configured to have
			its background color changed.
		</p>
	</Docs>
	<Frame title="Basic Component">
		<TestComponent title="Hello World" />
	</Frame>
</Canvas>
