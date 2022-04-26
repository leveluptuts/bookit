<script context="module" lang="ts">
	import { Window, Frame } from '$lib';
	import TestComponent from './TestComponent.svelte';

	export const title = 'Basic';
	export const parent = 'A Parent';
</script>

<Window>
	<Frame title="Basic Component">
		<TestComponent title="Hello World" />
	</Frame>
</Window>
