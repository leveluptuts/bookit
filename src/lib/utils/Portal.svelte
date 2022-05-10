<script lang="ts">
	import { onMount, tick } from 'svelte';
	let iframeRef: HTMLIFrameElement;

	// export function portal(el) {
	// 	async function update() {
	// 		if (iframeRef === null || iframeRef === undefined) {
	// 			await tick();
	// 		}

	// 		console.log('iframeRef', iframeRef);
	// 		if (iframeRef) {
	// 			iframeRef.contentWindow?.document.body.appendChild(el);
	// 			el.hidden = false;
	// 		}
	// 	}

	// 	function destroy() {
	// 		console.log('destroy => ', iframeRef);
	// 		if (el.parentNode) {
	// 			el.parentNode.removeChild(el);
	// 		}
	// 	}

	// 	update();

	// 	return {
	// 		update,
	// 		destroy
	// 	};
	// }
</script>

<!-- <iframe bind:this={iframeRef} /> -->

<div>
	<slot />
</div>
