<script context="module" lang="ts">
	import { Window, Frame } from '$lib';
	import TestComponent from './TestComponent.svelte';

	export const title = 'Frame Options';
	export const parent = 'A Parent';
</script>

<Window>
	<Frame size={[200, 'auto']} bg="#333" checker={true} padding="40" title="With Frame Options">
		<TestComponent title="Hello World" />
	</Frame>
</Window>
