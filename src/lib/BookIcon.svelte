<script lang="ts">
	export let name: 'frame' | 'component' | 'size' | 'canvas' | 'code' | 'chev' | 'search' | 'group';
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
{:else if name === 'code'}
	<svg height="1em" width="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
			fill="currentColor"
		/>
		<path
			d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
			fill="currentColor"
		/>
		<path
			d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
			fill="currentColor"
		/>
	</svg>
{:else if name === 'chev'}
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
			fill="currentColor"
		/>
	</svg>
{:else if name === 'frame'}
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 9H3V7H7V3H9V9Z" fill="currentColor" />
		<path d="M9 15H3V17H7V21H9V15Z" fill="currentColor" />
		<path d="M21 15H15V21H17V17H21V15Z" fill="currentColor" />
		<path d="M15 9.00012H21V7.00012H17V3.00012H15V9.00012Z" fill="currentColor" />
	</svg>
{:else if name === 'group'}
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 9H3V7H7V3H9V9Z" fill="currentColor" />
		<path d="M9 15H3V17H7V21H9V15Z" fill="currentColor" />
		<path d="M21 15H15V21H17V17H21V15Z" fill="currentColor" />
		<path d="M15 9.00012H21V7.00012H17V3.00012H15V9.00012Z" fill="currentColor" />
	</svg>
{:else if name === 'search'}
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
			fill="currentColor"
		/>
	</svg>
{/if}

<style>
	svg {
		opacity: 0.6;
	}
</style>
