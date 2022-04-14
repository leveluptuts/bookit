<script lang="ts">
	export let tree: {
		[key: string]: {
			title: string;
			parent: string;
			icon: string;
		}[];
	};
</script>

<nav>
	<ul>
		{#each Object.entries(tree) as [parent, stories] (parent)}
			<li>
				<h4>{parent}</h4>
				<ul class="bookit_link_list">
					{#each stories as story}
						<li>
							<a href={`/book/${story.parent}-${story.title}`}>
								{story.title}
							</a>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	h4 {
		height: var(--bookit_header_height);
		font-family: monospace;
		margin: 0;
		padding: 8px;
		border-bottom: var(--bookit_line);
		color: white;
	}

	nav {
		color: var(--bookit_color, #fff);
		background: var(--bookit_bg, rgba(0, 0, 0, 0.12));
		border-right: var(--bookit_line);

		height: 100%;
	}

	nav a {
		color: var(--bookit_color, #fff);
	}

	.bookit_link_list {
		padding: 20px;
	}

	.bookit_link_list li {
		margin-bottom: 5px;
	}
</style>
