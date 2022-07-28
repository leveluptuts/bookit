<script>import { bookit_state } from './state';
import set from 'just-safe-set';
export let key;
export let value;
export let path;
$: selected_title = $bookit_state === null || $bookit_state === void 0 ? void 0 : $bookit_state.selected_frame;
function updateStore(value) {
    // If it's single value
    bookit_state.update((u) => {
        let newData = { ...u };
        set(newData, 'loaded.frames.' + selected_title + '.controls.' + path, value);
        return newData;
    });
}
</script>

{#if value !== null}
	{#if typeof value === 'object'}
		{#if Array.isArray(value)}
			<span class="key">{key}{':'}</span>
			{#each value as nestedValue, index}
				<svelte:self label={false} {key} value={nestedValue} path={path + '[' + index + ']'} />
			{/each}
		{:else}
			<span class="key">{key}{':'}</span>
			<div class="nested">
				{#each Object.entries(value) as [nestedKey, nestedValue]}
					<svelte:self key={nestedKey} value={nestedValue} path={path + '.' + nestedKey} />
				{/each}
			</div>
		{/if}
	{:else}
		<label class="st-container" for={path}>
			<span class="key">{key}{':'}</span>
			{#if typeof value === 'string'}
				<input id={path} type="text" {value} on:input={(e) => updateStore(e.target.value)} />
			{:else if typeof value === 'boolean'}
				<span class="key">{key}{':'}</span>
				<input
					id={path}
					type="checkbox"
					checked={value}
					on:change={(e) => {
						updateStore(e.target.checked);
					}}
				/>
			{:else if typeof value === 'number'}
				<span class="key">{key}{':'}</span>
				<input
					id={path}
					type="number"
					{value}
					on:change={(e) => {
						updateStore(parseFloat(e.target.value));
					}}
				/>
			{/if}
		</label>
	{/if}
{/if}

<style>
	.key {
		font-size: 14px;
		color: var(--toy-key-color);
		opacity: 0.9;
	}

	.st-container {
		display: flex;
		align-items: baseline;
		justify-content: start;
		margin-bottom: 2px;
	}

	input {
		display: inline;
		padding: 0 3px;
		margin: 0 4px;
		margin-left: 2px;
		font-size: 12px;
		font-family: 'MonoLisa', monospace;
		flex-grow: 0;
		color: var(--toy-value-color);
		border: 0;
		border-radius: 1px;
		outline-offset: 1px;
		width: 100%;
		background: transparent;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	[type='number'] {
		width: 80px;
	}

	.nested {
		margin-left: 15px;
	}
</style>
