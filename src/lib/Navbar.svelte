<nav>
	<ul class="nav-links">
		<li><a class="nav-link" href="/">Home</a></li>
		<li><a class="nav-link" href="/about">About</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 80px;
		z-index: 1000;
		background: linear-gradient(
			to bottom,
			rgba(54, 56, 58, .9),
			rgba(54, 56, 58, 0.6) 75%,
			rgba(54, 56, 58, 0.2) 85%,
			transparent 100%
		);
		backdrop-filter: blur(8px);
		letter-spacing: .1rem;
		overflow-x: hidden;
	}

	.nav-links {
		display: flex;
		gap: 4rem;
		margin: 0;
		padding: 0;
		padding-bottom: 20px;
		list-style: none;
	}

	.nav-link {
		color: var(--lightgray);
		text-decoration: none;
		font-size: 1rem;
		cursor: pointer;
		transition: all .3s ease-in-out;
	}

	.nav-link:hover {
		color: var(--lightblue);
		text-shadow: 0 0 10px var(--text-glow);
	}
</style>
