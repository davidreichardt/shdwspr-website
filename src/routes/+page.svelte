<script lang="ts">
	import { onMount } from "svelte";

	let activePopover: string | null = null;

	function togglePopover(branch: string | null) {
		activePopover = activePopover === branch ? null : branch;
	}

	onMount(() => {
		const closeButtons = document.querySelectorAll('.close-popover');
		closeButtons.forEach((btn) => {
			btn.addEventListener('click', () => {
				togglePopover(null);
			});
		});
	});
</script>

<section class="main">
	<div class="background-img"></div>
	<h1 class="tagline">Forge Your Own Path</h1>
	<div class="text-div">
		<p class="description">
			Welcome to Shadow Spear Initiative. We are an organization that provides the freedom and
			support to forge your own path in the 'verse.
		</p>
		<p class="description call-to-join">Your destiny is yours to shape.</p>
		<p class="description glow-text">stand with SHDWSPR.</p>
		<div class="join-div">
			<button class="btn join-btn" on:click={() => (window.location.href = '/join')}>
				Join Now
			</button>
		</div>
	</div>
	<div class="branch-buttons">
		<button class="btn default-btn branch-btn" on:click={() => togglePopover('Tactical')}>
			Spear Tactical
		</button>
		<button class="btn default-btn branch-btn" on:click={() => togglePopover('Logistics')}>
			Spear Logistics
		</button>
		<button class="btn default-btn branch-btn" on:click={() => togglePopover('Recon')}>
			Spear Recon
		</button>
		<button class="btn default-btn branch-btn" on:click={() => togglePopover('Guardian')}>
			Spear Guardian
		</button>
	</div>

	<!-- div that dims and blurs the background when a popover is active -->
	{#if activePopover}
		<div class="dimmed-bg" on:click={() => togglePopover(null)}></div>
	{/if}

	<div class="popover" class:show={activePopover === 'Tactical'}>
		<h2>Spear Tactical</h2>
		<h3>Combat and Security</h3>
		<p>
			SHDWSPR’s combat arm, responsible for bounty hunting, fleet security, mercenary work, and
			private military operations. Spear Tactical ensures that contracts are fulfilled with
			precision and firepower, protecting both members and allies.
		</p>
		<button class="close-popover">Close</button>
	</div>
	<div class="popover" class:show={activePopover === 'Logistics'}>
		<h2>Spear Logistics</h2>
		<h3>Resource and Trade</h3>
		<p>
			A crucial component of SHDWSPR, handling mining, salvaging, hauling, and trading to fund and
			supply the Initiative. Spear Logistics ensures that ships stay fueled, weapons stay stocked,
			and profits keep flowing.
		</p>
		<button class="close-popover">Close</button>
	</div>
	<div class="popover" class:show={activePopover === 'Recon'}>
		<h2>Spear Recon</h2>
		<h3>Exploration and Intel</h3>
		<p>
			The eyes and ears of SHDWSPR, specializing in deep-space scouting, surveillance, and data
			gathering. Spear Recon discovers strategic locations, hidden routes, and valuable resources to
			give the Initiative an edge.
		</p>
		<button class="close-popover">Close</button>
	</div>
	<div class="popover" class:show={activePopover === 'Guardian'}>
		<h2>Spear Guardian</h2>
		<h3>Medical and Support</h3>
		<p>
			SHDWSPR’s humanitarian branch, providing medical aid, repair services, and emergency response
			to members and allies. Spear Guardian ensures that the Initiative’s ships and crew are kept in
			top condition, ready for any challenge.
		</p>
		<button class="close-popover">Close</button>
	</div>
</section>

<style>
	.background-img {
		background: url('/images/hero-polaris.jpeg') center/cover no-repeat;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		min-width: 100vw;
		height: 100vh;
		min-height: 100vh;
		z-index: -2;
	}

	/* Add an overlay to the background image to dim brightness */
	.background-img::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.3);
		z-index: -1;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		width: 100vw;
		max-width: 100vw;
		padding: 0;
		margin: 0;
		position: relative;
		letter-spacing: 0.1rem;
		line-height: 1.5;
		overflow-x: hidden;
	}

	.tagline {
		font-size: clamp(2rem, 7vw, 5rem);
		color: white;
		text-align: center;
		font-style: italic;
		text-shadow: 6px 6px 15px var(--text-glow);
		margin-top: 90px;
		max-width: 90%;
		padding: 0 5%;
	}

	.text-div {
		font-size: clamp(0.8rem, 2vw, 1.3rem);
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-grow: 1;
		text-align: center;
		margin-top: 2rem;
		width: 95%;
		padding: 0 5%;
	}

	.description {
		color: white;
		margin: 0 0 1rem;
		max-width: 80ch;
	}

	.call-to-join,
	.glow-text {
		margin: 1rem 0 1rem;
	}

	.glow-text {
		font-style: italic;
		color: var(--lightblue);
		text-shadow: 0 0 15px var(--text-glow);
		font-weight: 700;
		padding: 0 5%;
	}

	.join-div {
		margin: 1.5rem 0 4.5rem;
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.join-btn {
		font-size: 1.5rem;
		font-weight: 800;
		border-width: 3px;
		background: linear-gradient(130deg, var(--mediumgray), var(--lightblue));
		box-shadow: 0px 0px 20px var(--neon-glow);
		color: var(--darkgray);
		width: clamp(15rem, 50vw, 20rem);
		padding: 10px 20px;
	}

	.join-btn:hover {
		background: linear-gradient(130deg, var(--lightblue), var(--mediumgray));
		scale: 1.05;
		color: var(--lightgray);
		box-shadow: 0px 0px 25px var(--neon-glow);
	}

	.branch-buttons {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		gap: 1rem;
		width: 100vw;
		max-width: 80%;
		margin-bottom: 150px;
	}

	.branch-btn {
		width: auto;
		min-width: 235px;
		max-width: 400px;
		font-size: 1rem;
		padding: 15px 15px;
	}

	.dimmed-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		z-index: 10;
		backdrop-filter: blur(5px);
		cursor: pointer;
	}

	.close-popover {
		cursor: pointer;
		border: none;
		background-color: transparent;
		font-size: 1rem;
		margin-top: 2rem;
	}

	.popover {
		display: none;
		background: linear-gradient(130deg, var(--mediumgray), var(--lightgray));
		color: var(--darkgray);
		padding: 2rem;
		border: 2px solid var(--glass-border);
		box-shadow: 0px 0px 20px var(--neon-glow);
		border-radius: 1rem;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
		max-width: 500px;
		text-align: center;
		z-index: 1000;
	}

	.popover h2 {
		font-size: 1.8rem;
		font-weight: 900;
		text-transform: uppercase;
		text-shadow: 1px 1px 4px var(--text-glow);
		margin: 0;
		margin-bottom: 1rem;
	}

	.popover h3 {
		font-size: 1.2rem;
		font-weight: 700;
		text-transform: uppercase;
		margin: 0;
		margin-bottom: 2rem;
	}

	.popover p {
		font-size: 1rem;
		font-weight: 500;
		margin: 0;
		margin-bottom: 2rem;
	}

	.popover.show {
		display: block;
	}

	@media (max-width: 1080px) {
		.branch-buttons {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 540px) {
		.branch-buttons {
			grid-template-columns: 1fr;
			margin-bottom: 80px;
		}
	}
</style>
