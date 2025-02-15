<script lang="ts">
	import { DISCORD_LINK, RSI_ORG_LINK } from '../../config.js';

	const links: Record<string, string> = {
		rsi: RSI_ORG_LINK,
		discord: DISCORD_LINK
	};

	function goToLink(type: string) {
		if (links[type]) {
			window.open(links[type], '_blank', 'noopener, noreferrer');
		}
	}
</script>

<section class="join-container">
	<h1>Join <span class="glow-text">Shadow Spear Initiative</span></h1>
	<p class="intro">
		Do you have what it takes to carve your name into the stars? Do you thrive in the chaos of
		battle, the thrill of the hunt, or the rush of striking a lucrative deal? Then Shadow Spear
		Initiative wants <span class="glow-text">YOU!</span>
	</p>
	<p class="intro-highlight">
		Shadow Spear Initiative is a professional yet casual organization, uniting freelancers,
		mercenaries, bounty hunters, traders, and resource collectors under one banner. Whether you're
		delivering justice at gunpoint, hauling valuable cargo, or extracting resources from the depths
		of uncharted space, there's a place for you in our ranks.
	</p>
	<p class="slogan">
		adapt, execute, and profit in the void with SHDWSPR - <span class="glow-text">join today!</span>
	</p>

	<div class="join-btns">
		<button class="btn default-btn" on:click={() => goToLink('rsi')}>RSI Org Page</button>
		<button class=" btn default-btn" on:click={() => goToLink('discord')}>Discord</button>
	</div>

	<h2 class="glow-title">Why Join Us?</h2>
	<ul class="benefits-list">
		<li>
			<strong>Play at Your Own Pace</strong>
			<div class="benefits-text">No strict activity requirements.</div>
		</li>
		<li>
			<strong>All Playstyles Welcome</strong>
			<div class="benefits-text">Freelancing, combat, mining, salvage, and more.</div>
		</li>
		<li>
			<strong>Supportive Community</strong>
			<div class="benefits-text">Join a group of like-minded players who help each other out.</div>
		</li>
		<li>
			<strong>Learn and Grow Together</strong>
			<div class="benefits-text">
				Whether a veteran or a new citizen, our members share knowledge and resources.
			</div>
		</li>
		<li>
			<strong>Profit Together</strong>
			<div class="benefits-text">We share profits from group activities.</div>
		</li>
	</ul>
</section>

<style>
	.join-container {
		width: 100vw;
		min-height: calc(100vh - 160px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--darkgray);
		color: white;
		padding: 5rem 0;
		letter-spacing: 0.05rem;
		line-height: 1.5rem;
        box-shadow: inset 0 0 500px var(--neon-glow);
	}

	.join-container h1,
	.join-container p,
	.join-container ul {
		max-width: 900px;
		text-align: center;
	}

	.glow-text {
		font-style: italic;
		text-shadow:
			0 0 10px var(--text-glow),
			0 0 20px var(--neon-glow);
		font-weight: 800;
		font-size: 2.5rem;
	}

	.intro .glow-text,
	.slogan .glow-text {
		color: var(--lightblue);
		font-size: 1.3rem;
	}

	.intro-highlight {
		color: var(--lightblue);
		text-shadow: 0 0 10px var(--text-glow);
	}

	.slogan {
		font-style: italic;
	}

	.join-btns {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin: 2rem 0 3rem;
	}

	.glow-title {
		text-shadow: 0 0 10px var(--text-glow);
		font-size: 2rem;
	}

	.benefits-list {
		list-style: none;
		padding: 0;
	}

	.benefits-list li {
		margin: 0.5rem 0;
		border: 2px solid var(--glass-border);
		border-radius: 15px;
		padding: 1rem;
		background: var(--glass-bg);
		width: 100%;
	}

	.benefits-list li:hover {
		box-shadow: 0 0 10px var(--neon-glow);
		background-color: var(--neon-glow);
		color: var(--darkgray);
		transition: all 0.3s ease-in-out;
	}

	.benefits-list li:hover strong {
		color: var(--darkgray);
	}

	.benefits-list li strong {
		font-weight: 800;
		color: var(--lightblue);
		text-shadow: 0 0 5px var(--text-glow);
	}

	.benefits-text {
		margin-top: 0.5rem;
	}
</style>
