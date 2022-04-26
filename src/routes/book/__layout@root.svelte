<script lang="ts" context="module">
	import { layoutLoad as load, Book } from '$lib';
	export { load };
</script>

<Book>
	<slot />
</Book>
