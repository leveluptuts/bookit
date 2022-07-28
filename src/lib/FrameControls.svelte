<script lang="ts">
	import { slide } from 'svelte/transition';
	import BookDropMenu from './BookDropMenu.svelte';
	import BookIcon from './BookIcon.svelte';
	import SideBarHeading from './elements/SideBarHeading.svelte';
	import { bookit_state } from './state';

	// let selected_title = $bookit_state.selected_frame;
	$: selected_title = $bookit_state?.selected_frame;

	let is_toggled = true;
</script>

{#if $bookit_state?.loaded.frames?.[selected_title]}
	<div class="wrapper">
		<SideBarHeading on:click={() => (is_toggled = !is_toggled)}
			><BookIcon name="frame" /> Controls</SideBarHeading
		>

		{#if is_toggled}
			<div class="inputs" transition:slide>
				<label>
					Padding
					<input type="number" bind:value={$bookit_state.loaded.frames[selected_title].padding} />
				</label>
				<label>
					Checker
					<input
						type="checkbox"
						bind:checked={$bookit_state.loaded.frames[selected_title].checker}
					/>
				</label>
				<label>
					Border
					<input
						type="checkbox"
						bind:checked={$bookit_state.loaded.frames[selected_title].border}
					/>
				</label>
				<label>
					Background
					<input type="text" bind:value={$bookit_state.loaded.frames[selected_title].bg} />
				</label>

				<label>Size:</label>
				<BookDropMenu
					icon="size"
					buttonText="Size Presets"
					onUpdate={(size) => ($bookit_state.loaded.frames[selected_title].size = size)}
					options={[
						{ label: 'Small 320px', value: [320, 'auto'] },
						{ label: 'iPhone 13 Pro Max', value: [428, 926] },
						{ label: 'Med 640px', value: [640, 'auto'] },
						{ label: 'Large 960px', value: [960, 'auto'] }
					]}
				/>
				<div style:padding="6px" />

				<div class="joint-input">
					<input type="number" bind:value={$bookit_state.loaded.frames[selected_title].size[0]} /> x
					<input type="number" bind:value={$bookit_state.loaded.frames[selected_title].size[1]} />
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	input[type='number'],
	input[type='text'] {
		background-color: transparent;
		border-radius: 0.25rem;
		border: var(--bookit_line);
		color: white;
		width: 100%;
	}

	label {
		display: block;
		color: white;
		font-size: 14px;
		font-family: monospace;
		margin-bottom: 10px;
	}

	.wrapper {
		border-bottom: var(--bookit_line);
	}

	.inputs {
		padding: 5px 5px 20px;
	}

	.joint-input {
		display: flex;
		gap: 5px;
		align-items: center;
		color: white;
		justify-content: space-between;
	}
</style>
