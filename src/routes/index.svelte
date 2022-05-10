<script>
	import '../demo/homepage.css';
</script>

<div class="wrapper">
	<h1>Bookit</h1>
	<h4>The least spooky way to build your components.</h4>
	<h5>Pronounced Boo-Kits</h5>
	<a href="/book">Bookit Demo</a>

	<ul>
		<li>Built for Svelte Kit</li>
		<li>No webkit, or extra build process</li>
		<li>Integrated into your app</li>
		<li>Themeable</li>
		<li>Simple</li>
		<li>iFrame Isolation</li>
	</ul>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: Exo, sans-serif;
	}

	h1 {
		background: black;
		padding: 40px;
		transform: rotate(-5deg);
		text-transform: uppercase;
		display: inline-block;
		font-family: Exo, sans-serif;
		font-size: clamp(7rem, 20vw, 12.5rem);
		font-weight: 900;
		margin-bottom: 70px;
	}

	h4 {
		margin: 0;
		font-size: 1.2rem;
	}

	a {
		color: white;
		text-decoration: none;
		font-size: 2rem;
		margin: 20px;
		border-bottom: solid 4px hsl(0deg 79% 63%);
		transition: 0.3s ease padding;
	}

	a:hover {
		padding-bottom: 5px;
	}
</style>
