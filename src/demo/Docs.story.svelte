<script context="module" lang="ts">
	import { Canvas, Frame, Docs, Callout } from '$lib';

	import TestComponent from './TestComponent.svelte';

	export const title = 'Info';
	export const parent = 'Docs Example';
</script>

<Canvas>
	<Docs>
		<h1>Docs</h1>
		<p>This is a basic Docs component that allows you to write docs within your stories.</p>
		<p>Below is a Frame that includes a component. A frame is a way to group related components.</p>
		<p>
			Both Docs and Frames live within a Canvas component. The canvas is where your frames and docs
			live and is the main area where you put your components. A canvas can be configured to have
			it's background color changed.
		</p>

		<h2>Call Outs</h2>
		<Callout>
			This is a {`<Callout />`} component. It can be used for information that should be made more obvious.
			It can be of three types.
		</Callout>
		<Callout type="warning">This is a 'warning'.</Callout>
		<Callout type="correct">This is a 'correct'.</Callout>
	</Docs>
	<Frame title="Basic Component">
		<TestComponent title="Hello World" />
	</Frame>
</Canvas>
