<script lang="ts">
	let activePopover: string | null = null;

	function togglePopover(branch: string | null) {
		activePopover = activePopover === branch ? null : branch;
	}
</script>

<section class="hero-container">
	<h1 class="tagline">Forge Your Own Path</h1>
	<!-- <img src="/images/shdwspr-logo.png" alt="Shadow Spear Initiative Logo" class="logo" /> -->
	<p>
		Welcome to Shadow Spear Initiative. We are an organization that provides the freedom and support
		to forge your own path in the 'verse. Your destiny is yours to shape - stand with SHDWSPR.
	</p>
	<button class="btn join-btn" on:click={() => (window.location.href = '/join')}>Join Now</button>
	<div class="branch-buttons">
		<button class="btn branch-btn" on:click={() => togglePopover('Tactical')}>Spear Tactical</button
		>
		<button class="btn branch-btn" on:click={() => togglePopover('Logistics')}
			>Spear Logistics</button
		>
		<button class="btn branch-btn" on:click={() => togglePopover('Recon')}>Spear Recon</button>
		<button class="btn branch-btn" on:click={() => togglePopover('Guardian')}>Spear Guardian</button
		>
	</div>
	<div class="popover" class:show={activePopover === 'Tactical'}>
		<h2>Spear Tactical</h2>
		<h3>Combat and Security</h3>
		<p>
			SHDWSPR’s combat arm, responsible for bounty hunting, fleet security, mercenary work, and
			private military operations. Spear Tactical ensures that contracts are fulfilled with
			precision and firepower, protecting both members and allies.
		</p>
		<button class="close-popover" on:click={() => togglePopover(null)}>Close</button>
	</div>
	<div class="popover" class:show={activePopover === 'Logistics'}>
		<h2>Spear Logistics</h2>
		<h3>Resource and Trade</h3>
		<p>
			A crucial component of SHDWSPR, handling mining, salvaging, hauling, and trading to fund and
			supply the Initiative. Spear Logistics ensures that ships stay fueled, weapons stay stocked,
			and profits keep flowing.
		</p>
		<button class="close-popover" on:click={() => togglePopover(null)}>Close</button>
	</div>
	<div class="popover" class:show={activePopover === 'Recon'}>
		<h2>Spear Recon</h2>
		<h3>Exploration and Intel</h3>
		<p>
			The eyes and ears of SHDWSPR, specializing in deep-space scouting, surveillance, and data
			gathering. Spear Recon discovers strategic locations, hidden routes, and valuable resources to
			give the Initiative an edge.
		</p>
		<button class="close-popover" on:click={() => togglePopover(null)}>Close</button>
	</div>
	<div class="popover" class:show={activePopover === 'Guardian'}>
		<h2>Spear Guardian</h2>
		<h3>Medical and Support</h3>
		<p>
			SHDWSPR’s humanitarian branch, providing medical aid, repair services, and emergency response
			to members and allies. Spear Guardian ensures that the Initiative’s ships and crew are kept in
			top condition, ready for any challenge.
		</p>
		<button class="close-popover" on:click={() => togglePopover(null)}>Close</button>
	</div>
</section>

<style>
	.hero-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		overflow: hidden;
		width: 100%;
		background: url('/images/hero-polaris.jpeg') center/cover no-repeat;
		padding: 0;
		margin: 0;
		z-index: 1;
		position: relative;
	}

	.hero-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		z-index: 0;
	}

	.hero-container > * {
		z-index: 1;
	}

	.tagline {
		font-size: 5rem;
		margin-top: 8rem;
		color: white;
		text-align: center;
		transform: skewX(-20deg);
		text-shadow: 6px 6px 15px var(--lightblue);
	}

	/* .logo {
		margin: 0 auto;
		width: auto;
		height: 10rem;
	} */

	p {
		font-size: 1.3rem;
		line-height: 2rem;
		letter-spacing: 0.1rem;
		text-align: center;
		color: white;
		margin: 0 auto;
		padding: 1rem;
		max-width: 50rem;
		display: flex;
	}

	.btn {
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-weight: 700;
        font-size: 1rem;
		cursor: pointer;
		border: 2px solid var(--lightblue);
        background-color: transparent;
        color: var(--lightblue);
        box-shadow: 0px 0px 10px var(--lightblue);
		width: 15rem;
		height: 5rem;
		border-radius: 8px;
        transition: .3s ease-in-out;
	}

    .btn:hover {
        background-color: var(--lightblue);
        color: var(--darkgray);
        box-shadow: 0px 0px 15px var(--lightblue);
    }

	.join-btn {
		margin: 50px auto;
		font-size: 1.3rem;
		font-weight: 800;
        border-width: 3px;
        background: linear-gradient(130deg, var(--mediumgray), var(--lightblue));
        box-shadow: 0px 0px 20px var(--lightblue);
        color: var(--darkgray);
		margin-top: 2rem;
		margin-bottom: 5rem;
		width: 20rem;
	}

    .join-btn:hover {
        background: linear-gradient(130deg, var(--lightblue), var(--mediumgray));
        scale: 1.05;
        color: var(--lightgray);
        box-shadow: 0px 0px 25px var(--lightblue);
    }

    

	.branch-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		width: 100%;
		margin-top: auto;
		padding-bottom: 10rem;
		background: transparent;
	}

	.popover {
		display: none;
		background: var(--darkgray);
		color: var(--lightgray);
		padding: 1rem;
		border-radius: 1rem;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		max-width: 500px;
		text-align: center;
		z-index: 1000;
	}

	.popover.show {
		display: block;
	}
</style>
