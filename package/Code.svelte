<script>var _a, _b;
import BookIcon from './BookIcon.svelte';
import SideBarHeading from './elements/SideBarHeading.svelte';
import { bookit_state } from './state';
$: selected_title = (_a = $bookit_state === null || $bookit_state === void 0 ? void 0 : $bookit_state.selected_frame) === null || _a === void 0 ? void 0 : _a.title;
$: selected_raw = (_b = $bookit_state === null || $bookit_state === void 0 ? void 0 : $bookit_state.loaded) === null || _b === void 0 ? void 0 : _b.raw;
let code = {};
let last_index = 0;
$: if (selected_raw) {
    while (last_index !== -1) {
        let start_index = selected_raw.indexOf('<Frame', last_index);
        let title_prop_index = selected_raw.indexOf('title=', start_index) + 7;
        let current_title = selected_raw.substring(title_prop_index, selected_raw.indexOf('"', title_prop_index));
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
<style>code,
p {
  color: var(--bookit_color, white);
}

.code-section {
  padding: 20px;
}</style>
