<script>export let props = {};
export let title = 'Props';
</script>

{#if title}
	<h4>{title}</h4>
{/if}

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Description</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		{#each Object.entries(props) as [key, data] (key)}
			<tr>
				<td>
					{key}
					{#if !data.default}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
						</svg>
					{/if}
				</td>
				<td>{data.type || ''}</td>
				<td>{data.text || ''}</td>
				<td>{data.default || ''}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		--table_line: inset 0 -1px var(--bookit_line_color);
		border: solid 1px var(--bookit_line_color);
		border-spacing: 0;
		font-family: var(--body_font);
		font-size: var(--small_font_size);
		border-radius: 5px;
		overflow: hidden;
	}

	td,
	th {
		font-weight: normal;
		padding: 10px;
		text-align: left;
	}

	thead tr {
		background-color: var(--bookit_line_color);
		box-shadow: var(--table_line);
	}
	th + th {
		border-left: solid 1px var(--bookit_line_color);
	}

	td + td {
		border-left: solid 1px var(--bookit_line_color);
	}

	td {
		position: relative;
	}

	tr td:first-child {
		padding-left: 30px;
	}

	svg {
		position: absolute;
		left: 2px;
		top: 8px;
	}

	svg path {
		fill: var(--bookit_accent, #f0c05e);
	}

	tr {
		box-shadow: var(--table_line);
		transition: 0.3s ease background;
	}

	tbody tr:last-child {
		box-shadow: 0;
	}

	tr:hover {
		background-color: var(--bookit_line_color);
	}
</style>
