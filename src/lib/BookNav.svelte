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
				<ul>
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
	nav {
		background: var(--bookit_bg, white);
		padding: 20px;
	}
</style>
