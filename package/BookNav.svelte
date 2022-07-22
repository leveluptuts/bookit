<script>// This is the side nav aka BookNav
// All stories will show up here automatically via the tree
import { bookit_state } from './state';
import BookIcon from './BookIcon.svelte';
import SideBarHeading from './elements/SideBarHeading.svelte';
import { slide } from 'svelte/transition';
// local
let filter = '';
</script>

<div class="bookit_navbar">
	<label class="filter">
		<span>
			<BookIcon name="search" />
		</span>
		<input placeholder="Filter" type="text" bind:value={filter} /></label
	>
	<nav>
		<ul>
			{#each Object.entries($bookit_state.tree) as [parent, stories] (parent)}
				<li>
					<SideBarHeading active={$bookit_state?.loaded?.parent === parent}>{parent}</SideBarHeading
					>
					<ul class="bookit_link_list">
						{#each stories.filter((story) => story.title.includes(filter)) as story}
							<li>
								<a
									on:click={() => ($bookit_state.selected_frame = null)}
									class="bookit_link"
									class:active={$bookit_state?.loaded?.id === story.id}
									href={`/book/${story.parent}-${story.title}`}
								>
									<BookIcon name="component" />
									{story.title}
								</a>
								{#if $bookit_state?.loaded?.id === story.id}
									<ul class="bookit_link_list" transition:slide>
										{#each Object.entries(story.frames) as [key, frame] (key)}
											<li class="bookit_link"><BookIcon name="frame" />{frame.title}</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>.bookit_navbar {
  color: var(--bookit_color, #fff);
  background: var(--bookit_bg, rgba(0, 0, 0, 0.12));
  border-right: var(--bookit_line);
  height: 100%;
  padding: 10px 0;
  overflow: scroll;
}

nav a {
  color: var(--bookit_color, #fff);
}

.icon {
  position: relative;
  top: 2px;
}

.bookit_link_list {
  padding: 10px;
}

a.active.bookit_link {
  color: var(--bookit_accent, #f0c05e);
}

.bookit_link_list li {
  margin-bottom: 5px;
  white-space: nowrap;
}

.bookit_link {
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 14px;
}

label {
  margin: 1rem 10px;
  display: block;
}

.filter {
  position: relative;
}
.filter span {
  position: absolute;
  left: 4px;
  top: 4px;
}

input {
  background-color: transparent;
  border-radius: 0.25rem;
  border: solid 1px white;
  color: white;
  width: 100%;
  padding: 5px 5px 5px 30px;
}</style>
