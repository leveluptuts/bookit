<script lang="ts">
	export let name: 'frame' | 'component' | 'size' | 'canvas';
</script>

{#if name === 'frame'}
	<svg
		stroke="currentColor"
		fill="none"
		stroke-width="0"
		viewBox="0 0 24 24"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
		><path d="M3 3H9V5H5V9H3V3Z" fill="currentColor" /><path
			d="M3 21H9V19H5V15H3V21Z"
			fill="currentColor"
		/><path d="M15 21H21V15H19V19H15V21Z" fill="currentColor" /><path
			d="M21 3H15V5H19V9H21V3Z"
			fill="currentColor"
		/></svg
	>
{:else if name === 'component'}
	<svg
		stroke="currentColor"
		fill="none"
		stroke-width="0"
		viewBox="0 0 24 24"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M7.7572 6.3431L11.9998 2.10046L16.2425 6.3431L11.9998 10.5857L7.7572 6.3431ZM10.5856 6.3431L11.9998 4.92889L13.4141 6.3431L11.9998 7.75732L10.5856 6.3431Z"
			fill="currentColor"
		/><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2.10046 11.9999L6.3431 7.75726L10.5857 11.9999L6.3431 16.2425L2.10046 11.9999ZM4.92889 11.9999L6.3431 10.5857L7.75732 11.9999L6.3431 13.4141L4.92889 11.9999Z"
			fill="currentColor"
		/><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M13.4142 11.9999L17.6568 16.2425L21.8995 11.9999L17.6568 7.75726L13.4142 11.9999ZM17.6568 10.5857L16.2426 11.9999L17.6568 13.4141L19.071 11.9999L17.6568 10.5857Z"
			fill="currentColor"
		/><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M7.7572 17.6569L11.9998 13.4142L16.2425 17.6569L11.9998 21.8995L7.7572 17.6569ZM10.5856 17.6569L11.9998 16.2427L13.4141 17.6569L11.9998 19.0711L10.5856 17.6569Z"
			fill="currentColor"
		/></svg
	>
{:else if name === 'size'}
	<svg
		stroke="currentColor"
		fill="none"
		stroke-width="0"
		viewBox="0 0 24 24"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z"
			fill="currentColor"
		/></svg
	>
{:else if name === 'canvas'}
	<svg
		stroke="currentColor"
		fill="none"
		stroke-width="0"
		viewBox="0 0 24 24"
		height="1em"
		width="1em"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9 3H3V9H5V5H9V3ZM3 21V15H5V19H9V21H3ZM15 3V5H19V9H21V3H15ZM19 15H21V21H15V19H19V15ZM7 7H11V11H7V7ZM7 13H11V17H7V13ZM17 7H13V11H17V7ZM13 13H17V17H13V13Z"
			fill="currentColor"
		/></svg
	>
{/if}
