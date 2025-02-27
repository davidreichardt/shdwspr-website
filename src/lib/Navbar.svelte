<script>
	let menuOpen = false;
	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Join', href: '/join' },
		{ name: 'Login', href: '/login' }
	];
</script>

<nav>
	<div class="logo">SHDWSPR</div>
	<div class="nav-links">
		{#each navLinks as { name, href }}
			<a class="nav-link" href={href}>{name}</a>
		{/each}
	</div>
	<div class="login">Login</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		width: 100%;
		max-width: 100vw;
		min-height: 40px;
		max-height: 80px;
		box-sizing: border-box;
		background: var(--glass-bg);
		backdrop-filter: blur(10px);
		border-bottom: 2px solid var(--glass-border);
		box-shadow: 0 5px 10px var(--neon-glow);
		z-index: 1000;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		margin: 0;
		font-size: clamp(0.7rem, 1vw, 1rem);
		color: var(--lightgray);
		letter-spacing: .1rem;
		transition: transform .3s ease-in-out;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-link {
		color: var(--lightgray);
		text-decoration: none;
		transition: all 0.3s ease-in-out;
	}

	.nav-link:hover {
		color: var(--lightblue);
		text-shadow: 0 0 5px var(--text-glow);
	}
</style>
