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
	<section class="intro-section">
		<h1>Join <span class="shdwspr-glow-text">Shadow Spear Initiative</span></h1>
		<p class="intro">
			Do you have what it takes to carve your name into the stars? Do you thrive in the chaos of
			battle, the thrill of the hunt, or the rush of striking a lucrative deal? Then Shadow Spear
			Initiative wants <span class="glow-text">YOU!</span>
		</p>
		<p class="intro-highlight">
			Shadow Spear Initiative is a professional yet casual organization, uniting freelancers,
			mercenaries, bounty hunters, traders, and resource collectors under one banner. Whether you're
			delivering justice at gunpoint, hauling valuable cargo, or extracting resources from the
			depths of uncharted space, there's a place for you in our ranks.
		</p>
		<p class="intro-slogan">
			adapt, execute, and profit in the void with SHDWSPR.
		</p>
	</section>
	<div class="join-btns">
		<button class="btn default-btn" on:click={() => goToLink('rsi')}>RSI Org Page</button>
		<button class=" btn default-btn" on:click={() => goToLink('discord')}>Discord</button>
	</div>
	<section class="why-join">
		<h2>Why Join Us?</h2>
		<ul class="benefit-list">
			<li class="benefit">
				<strong class="benefit-title">Play at Your Own Pace</strong>
				<div class="benefits-text">No strict activity requirements.</div>
			</li>
			<li class="benefit">
				<strong class="benefit-title">All Playstyles Welcome</strong>
				<div class="benefits-text">Freelancing, combat, mining, salvage, and more.</div>
			</li>
			<li class="benefit">
				<strong class="benefit-title">Supportive Community</strong>
				<div class="benefits-text">
					Join a group of like-minded players who help each other out.
				</div>
			</li>
			<li class="benefit">
				<strong class="benefit-title">Learn and Grow Together</strong>
				<div class="benefits-text">
					Whether a veteran or a new citizen, our members share knowledge and resources.
				</div>
			</li>
			<li class="benefit">
				<strong class="benefit-title">Profit Together</strong>
				<div class="benefits-text">We share profits from group activities.</div>
			</li>
		</ul>
	</section>
</section>

<style>
	.join-container {
		min-height: calc(100vh - 80px);
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		line-height: 1.5;
		letter-spacing: .05rem;
		background: var(--darkgray);
		color: white;
		box-shadow: inset 0 0 500px var(--neon-glow);

	}

	.intro-section,
	.why-join {
		box-sizing: border-box;
		max-width: 1100px;
		width: 100%;
		text-align: center;
		padding: 1.5rem;
	}

	
	
	.benefit-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
