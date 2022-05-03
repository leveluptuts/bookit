<script context="module" lang="ts">
	import { tick } from 'svelte';

	export function portal(el, target: HTMLIFrameElement) {
		let targetEl: HTMLIFrameElement;

		async function update(newTarget: HTMLIFrameElement) {
			target = newTarget;
			targetEl = target;

			if (targetEl === null) {
				await tick();
			}

			if (targetEl) {
				targetEl.contentWindow?.document.body.appendChild(el);
				el.hidden = false;
			}
		}

		function destroy() {
			if (el.parentNode) {
				el.parentNode.removeChild(el);
			}
		}

		update(target);

		return {
			update,
			destroy
		};
	}
</script>

<script lang="ts">
	export let target: HTMLIFrameElement;
</script>

<div use:portal={target}>
	<slot />
</div>
