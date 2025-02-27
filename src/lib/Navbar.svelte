<script>
	let menuOpen = false;
	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Join', href: '/join' }
	];
</script>

<nav>
	<h1 class="logo">Shadow Spear Initiative</h1>
	<div class="nav-links">
		{#each navLinks as { name, href }}
			<a class="nav-link" href={href}>{name}</a>
		{/each}
	</div>
	<div class="login">Login</div>

	<div class="menu-btn {menuOpen ? 'open' : ''}" on:click={() => (menuOpen = !menuOpen)}>
		<span></span>
		<span></span>
		<span></span>
	</div>
</nav>

<div class="mobile-menu {menuOpen ? 'open' : ''}">
	{#each navLinks as { name, href }}
		<a class="mobile-nav-link" href={href} on:click={() => (menuOpen = false)}>{name}</a>
	{/each}
	{#if menuOpen}
		<a class="mobile-nav-link" href="/login" on:click={() => (menuOpen = false)}>Login</a>
	{/if}
</div>

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
		letter-spacing: 0.1rem;
		transition: transform 0.3s ease-in-out;
	}

	.logo {
		font-size: clamp(1rem, 1.5vw, 1.3rem);
		color: white;
		text-shadow: 0 0 15px var(--text-glow);
		font-style: italic;
	}

	.nav-links {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
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

	.menu-btn {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 40px;
		height: 40px;
		position: relative;
	}

	.menu-btn span {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: block;
		width: 100%;
		height: 4px;
		background: var(--lightblue);
		border-radius: 2px;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease,
			box-shadow 0.3s ease;
	}

	.menu-btn span:nth-child(1) {
		transform: translate(-50%, -10px);
	}

	.menu-btn span:nth-child(2) {
		transform: translate(-50%, 0);
	}

	.menu-btn span:nth-child(3) {
		transform: translate(-50%, 10px);
	}

	.menu-btn:hover span {
		box-shadow: 0 0 10px var(--neon-glow);
	}

	/* menu open state */
	.menu-btn.open span:nth-child(1) {
		transform: translate(-50%, 0) rotate(45deg);
	}

	.menu-btn.open span:nth-child(2) {
		opacity: 0;
	}

	.menu-btn.open span:nth-child(3) {
		transform: translate(-50%, 0) rotate(-45deg);
	}

	.mobile-menu {
		position: fixed;
		top: 45px;
		left: -100%;
		width: 100vw;
		height: 100vh;
		background: var(--glass-bg);
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		transition: left 0.4s ease-in-out;
		z-index: 1001;
	}

	.mobile-menu.open {
		left: 0;
	}

	.mobile-nav-link {
		color: var(--lightgray);
		text-decoration: none;
		font-size: 1.5rem;
		text-transform: uppercase;
		opacity: 0;
		transform: translateY(-50px);
		z-index: 1002;
	}

	.mobile-menu.open .mobile-nav-link {
		animation: slam-down .5s ease-out forwards;
	}

	@keyframes slam-down {
		from {
			transform: translateY(-50px);
			opacity: 0;
		}
		80% {
			transform: translateY(10px);
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.mobile-menu.open .mobile-nav-link:nth-child(1) {
		animation-delay: 100ms;
	}

	.mobile-menu.open .mobile-nav-link:nth-child(2) {
		animation-delay: 200ms;
	}

	.mobile-menu.open .mobile-nav-link:nth-child(3) {
		animation-delay: 300ms;
	}

	.mobile-menu.open .mobile-nav-link:hover {
		color: var(--lightblue);
		text-shadow: 0 0 5px var(--text-glow);
	}

	@media (max-width: 890px) {
		.logo,
		.nav-links,
		.login {
			display: none;
		}

		.nav {
			max-height: 50px;
		}

		.menu-btn {
			display: block;
		}
	}
</style>
