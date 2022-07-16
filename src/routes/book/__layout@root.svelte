<script lang="ts" context="module">
	import Toy from '@leveluptuts/svelte-toy/Toy.svelte';
	import { bookit_state } from '$lib/state';
	import { layoutLoad as load, Book } from '$lib';
	export { load };
</script>

<Book>
	<slot />
</Book>

<Toy theme="dark" register={{ bookit_state }} />
