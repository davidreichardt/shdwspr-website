<script lang="ts">
	let activePopover: string | null = null;

	function togglePopover(branch: string | null) {
		activePopover = activePopover === branch ? null : branch;
	}
</script>

<section class="hero-container">
	<h1 class="tagline">Forge Your Own Path</h1>
	<p class="description">
		Welcome to Shadow Spear Initiative. We are an organization that provides the freedom and support
		to forge your own path in the 'verse. Your destiny is yours to shape - stand with SHDWSPR.
	</p>
	<button class="btn join-btn" on:click={() => (window.location.href = '/join')}>Join Now</button>
	<div class="branch-buttons">
		<button class="btn default-btn branch-btn" on:click={() => togglePopover('Tactical')}
			>Spear Tactical</button
		>
		<button class="btn default-btn branch-btn" on:click={() => togglePopover('Logistics')}
			>Spear Logistics</button
		>
		<button class="btn default-btn branch-btn" on:click={() => togglePopover('Recon')}
			>Spear Recon</button
		>
		<button class="btn default-btn branch-btn" on:click={() => togglePopover('Guardian')}
			>Spear Guardian</button
		>
	</div>

	<!-- div that dims and blurs the background when a popover is active -->
	{#if activePopover}
		<div class="dimmed-bg"></div>
	{/if}

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
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		width: 100%;
		background: url('/images/hero-polaris.jpeg') center/cover no-repeat;
		padding: 0;
		margin: 0;
		z-index: 1;
		position: relative;
	}

	/* Add an overlay to the hero image to dim brightness */
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

	/* Make sure content stays on top of overlay and isn't dimmed */
	.hero-container > * {
		z-index: 1;
	}

	.tagline {
		font-size: clamp(2rem, 7vw, 5rem);
		margin-top: clamp(6rem, 14vh, 8rem);
		color: white;
		text-align: center;
		transform: skewX(-20deg);
		text-shadow: 6px 6px 15px var(--lightblue);
	}

	.description {
		font-size: clamp(1rem, 2vw, 1.3rem);
		line-height: clamp(1.2rem, 3.5vh, 2rem);
		letter-spacing: 0.1rem;
		text-align: center;
		color: white;
		margin: 0 auto;
		padding: 1rem;
		width: clamp(15rem, 60vw, 50rem);
		max-width: 80%;
	}

	.join-btn {
		margin: 50px auto;
		font-size: clamp(1rem , 2.5vw, 1.5rem);
		font-weight: 800;
		border-width: 3px;
		background: linear-gradient(130deg, var(--mediumgray), var(--lightblue));
		box-shadow: 0px 0px 20px var(--lightblue);
		color: var(--darkgray);
		margin-top: 2rem;
		margin-bottom: 5rem;
		width: clamp(15rem, 30vw ,20rem);
	}

	.join-btn:hover {
		background: linear-gradient(130deg, var(--lightblue), var(--mediumgray));
		scale: 1.05;
		color: var(--lightgray);
		box-shadow: 0px 0px 25px var(--lightblue);
	}

	.branch-buttons {
		display: flex;
		gap: 4rem;
		justify-content: center;
		width: 100%;
		margin-top: auto;
		padding-bottom: 10rem;
		background: transparent;
	}

	.dimmed-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 900;
		backdrop-filter: blur(5px);
	}

	.close-popover {
		cursor: pointer;
		border: none;
		background-color: transparent;
		font-size: 1rem;
		margin-top: 2rem;
		letter-spacing: 0.1rem;
	}

	.popover {
		display: none;
		background: linear-gradient(130deg, var(--mediumgray), var(--lightgray));
		color: var(--darkgray);
		padding: 2rem;
		border: 2px solid var(--lightblue);
		box-shadow: 0px 0px 20px var(--lightblue);
		border-radius: 1rem;
		letter-spacing: 0.1rem;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		max-width: 500px;
		text-align: center;
		z-index: 1000;
	}

	.popover h2 {
		font-size: 2rem;
		font-weight: 900;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
		text-shadow: 1px 1px 4px var(--lightblue);
		margin: 0;
		margin-bottom: 1rem;
	}

	.popover h3 {
		font-size: 1.2rem;
		font-weight: 700;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
		margin: 0;
		margin-bottom: 2rem;
	}

	.popover p {
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.5rem;
		margin: 0;
		margin-bottom: 2rem;
	}

	.popover.show {
		display: block;
	}
</style>
