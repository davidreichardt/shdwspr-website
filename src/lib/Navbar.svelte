<nav>
	<a href="/" class="logo-link">
		<img class="logo" src="/images/shdwspr-logo.png" alt="SHDWSPR Logo" />
	</a>
	<ul class="nav-links">
		<li><a class="nav-link" href="/">Home</a></li>
		<li><a class="nav-link" href="/about">About</a></li>
		<li><a class="nav-link" href="/members">Members</a></li>
		<li><a class="nav-link" href="/join">Join</a></li>
	</ul>
</nav>

<style>
	nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
		position: sticky;
		top: 0;
		width: 100%;
        height: 80px;
		z-index: 1000;
		background-color: #333;
		color: white;
		padding: 0;
	}

    .nav-links {
        display: flex;
        gap: 20px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

	.nav-link {
		color: white;
		text-decoration: none;
        font-size: 1rem;
        padding: 10px 15px;
	}

	.nav-link:hover {
		text-decoration: underline;
	}

    .logo-link {
        display: flex;
        align-items: center;
        height: 85%;
    }

	.logo {
        display: block;
        height: 85%;
        max-height: 60px;
		width: auto;
        margin: 0;
        padding: 0 0 0 10px;
    }
</style>
