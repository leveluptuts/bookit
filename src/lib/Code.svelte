<script lang="ts">
	import BookIcon from './BookIcon.svelte';
	import SideBarHeading from './elements/SideBarHeading.svelte';
	import { bookit_state } from './state';

	$: selected_title = $bookit_state?.selected_frame?.title;
	$: selected_raw = $bookit_state?.loaded?.raw;

	let code: { [name: string]: string } = {};
	let last_index = 0;

	$: if (selected_raw) {
		while (last_index !== -1) {
			let start_index = selected_raw.indexOf('<Frame', last_index);
			let title_prop_index = selected_raw.indexOf('title=', start_index) + 7;
			let current_title = selected_raw.substring(
				title_prop_index,
				selected_raw.indexOf('"', title_prop_index)
			);
			let start_index_bracket = selected_raw.indexOf('>', start_index);
			let end_index = selected_raw.indexOf('</Frame>', start_index);
			code[current_title] = selected_raw.substring(start_index_bracket + 1, end_index);
			last_index = selected_raw.indexOf('<Frame', end_index);
		}
	}
</script>

<SideBarHeading><BookIcon name="code" /> Code</SideBarHeading>

<div class="code-section">
	{#if selected_title}
		<code>{code[selected_title]}</code>
	{:else}
		<p>Please select a frame to see the code.</p>
	{/if}
</div>

<!-- TODO Syntax Highlighting -->
<style lang="scss">
	code,
	p {
		color: var(--bookit_color, white);
	}
	.code-section {
		padding: 20px;
	}
</style>
