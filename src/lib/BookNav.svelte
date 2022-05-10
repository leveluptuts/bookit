<script lang="ts">
	// This is the side nav aka BookNav
	// All stories will show up here automatically via the tree

	import { bookit_state } from './state';
	import BookIcon from './BookIcon.svelte';

	// props
	export let tree: {
		[key: string]: {
			title: string;
			parent: string;
			icon: string;
		}[];
	};

	// local
	let filter = '';
</script>

<div class="bookit_navbar">
	<label><span>Filter:</span><input type="text" bind:value={filter} /></label>
	<nav>
		<ul>
			{#each Object.entries(tree) as [parent, stories] (parent)}
				<li>
					<h4>{parent}</h4>
					<ul class="bookit_link_list">
						{#each stories.filter((story) => story.title.includes(filter)) as story}
							<li>
								<a
									on:click={() => ($bookit_state.selectedStory = null)}
									class="bookit_link"
									href={`/book/${story.parent}-${story.title}`}
								>
									<BookIcon name="component" />
									{story.title}
								</a>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	h4 {
		height: var(--bookit_header_height);
		font-family: monospace;
		margin: 0;
		padding: 8px 10px;
		border-bottom: var(--bookit_line);
		color: var(--bookit_color, white);
		white-space: nowrap;
	}

	.bookit_navbar {
		color: var(--bookit_color, #fff);
		background: var(--bookit_bg, rgba(0, 0, 0, 0.12));
		border-right: var(--bookit_line);
		height: 100%;
		padding: 10px 0;
	}

	nav a {
		color: var(--bookit_color, #fff);
	}

	.bookit_link_list {
		padding: 10px;
	}

	.bookit_link_list li {
		margin-bottom: 5px;
		white-space: nowrap;
	}

	.bookit_link {
		display: flex;
		gap: 5px;
		align-items: top;
		line-height: 1.5;
		font-size: 12px;
	}

	label {
		margin: 1rem 10px;
		display: block;
	}

	label span {
		color: white;
		font-size: 12px;
		margin-bottom: 5px;
		display: block;
	}

	input {
		background-color: transparent;
		border-radius: 0.25rem;
		border: solid 1px white;
		color: white;
		width: 100%;
	}
</style>
