<script>
	import { RSI_ORG_LINK, DISCORD_LINK } from '../config.js';
</script>

<section class="footer">
		<div class="org-links">
			<a class="link" href={RSI_ORG_LINK} rel="noopener noreferrer" target="_blank">RSI Org Page</a>
			<a class="link" href={DISCORD_LINK} rel="noopener noreferrer" target="_blank">Discord</a>
		</div>
		<div class="divider-line"></div>
	<div class="RSI-disclaimer">
		<div class="RSI-logos">
			<a href="https://robertsspaceindustries.com/" rel="noopener noreferrer" target="_blank"
				><img class="rsi-logo" src="/images/STARCITIZEN_WHITE.png" alt="Star Citizen logo" /></a
			>
			<a
				href="https://robertsspaceindustries.com/community-hub"
				rel="noopener noreferrer"
				target="_blank"
				><img
					class="rsi-logo"
					src="/images/MadeByTheCommunity_White.png"
					alt="Made by the community logo"
				/></a
			>
		</div>
		<p class="disclaimer">
			This is an unofficial Star Citizen fansite, not affiliated with the Cloud Imperium group of
			companies. All content on this site not authored by its host or users are property of their
			respective owners.
		</p>
	</div>
	<p class="copyright">&#169;2025 Shadow Spear Initiative</p>
</section>

<style>
	.footer {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-rows: auto auto;
		width: 100%;
		max-width: 100vw;
		background: var(--glass-bg);
		padding: 1.5rem 2rem 0;
		color: var(--lightgray);
		font-size: clamp(0.7rem, 1vw, 1rem);
		border-top: 2px solid var(--glass-border);
		box-shadow: 0 10px 20px 10px var(--neon-glow);
		backdrop-filter: blur(5px);
		gap: 2rem;
		align-items: center;
		box-sizing: border-box;
		overflow-x: hidden;
	}

	.org-links {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		max-width: 100%;
	}

	.link {
		color: var(--lightgray);
		text-decoration: none;
		border: 1px solid var(--glass-border);
		text-align: center;
		width: 100%;
		max-width: 140px;
		padding: 10px 15px;
		border-radius: 10px;
		background: var(--glass-bg);
		transition: all 0.3s ease-in-out;
	}

	.link:hover {
		color: var(--darkgray);
		background: var(--lightblue-bg);
	}

	.divider-line {
		width: 2px;
		height: 100%;
		margin: auto;
		background: var(--glass-border);
	}

	.RSI-disclaimer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		max-width: 100%;
		margin: 0 auto;
	}

	.RSI-logos {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		max-width: 100%;
		flex-wrap: wrap;
	}

	.rsi-logo {
		height: 120px;
		width: auto;
		max-width: 100%;
	}

	.disclaimer {
		margin: 2rem 0 0;
		max-width: 100%;
	}

	.copyright {
		grid-column: span 3;
		text-align: center;
		font-size: clamp(.5rem, .8vw, .8rem);
		margin: 1rem auto;
		max-width: 100%;
	}

	@media (max-width: 955px) {
		.footer {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto auto auto;
			text-align: center;
			justify-items: center;
			gap: 1.5rem;
		}

		.org-links {
			flex-direction: row;
			gap: 1rem;
		}

		.link {
			width: 140px;
		}

		.divider-line {
			width: 80%;
			height: 2px;
		}

		.RSI-logos {
			flex-direction: row;
			gap: 1rem;
		}

		.rsi-logo {
			height: 90px;
		}

		.copyright {
			grid-column: span 1;
			margin-top: 1rem;
		}
	}

	@media (max-width: 450px) {
		.footer {
			padding: 1rem .5rem;
			gap: 1rem;
		}

		.link {
			width: auto;
		}

		.RSI-logos {
			flex-direction: column;
			gap: .5rem;
		}

		.rsi-logo {
			height: 70px;
		}
	}
</style>
