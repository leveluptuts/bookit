<script lang="ts">
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

	// $: selected_code = code.forEach((code_string) => code_string.includes(selected_title));
	// $: console.log('selected_code', selected_code);
</script>

<div>
	<h4>👩‍💻 Code</h4>
</div>
{#if selected_title}
	<code>{code[selected_title]}</code>
{/if}

<style lang="scss">
	h4 {
		color: white;
	}
	code {
		color: white;
	}
</style>
