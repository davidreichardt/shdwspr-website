<script>
	import { RSI_ORG_LINK, DISCORD_LINK } from '../config.js';
</script>

<section class="footer">
	<p class="copyright">&#169;2025 Shadow Spear Initiative</p>
	<div class="links">
		<a href={RSI_ORG_LINK} rel="noopener noreferrer" target="_blank">RSI Org Page</a>
		<a href={DISCORD_LINK} rel="noopener noreferrer" target="_blank">Discord</a>
	</div>
	<!-- empty div to center links -->
	<div class="spacer"></div>
</section>

<style>
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: linear-gradient(
			to top,
			rgba(54, 56, 58, 0.9),
			rgba(54, 56, 58, 0.6) 75%,
			rgba(54, 56, 58, 0.2) 85%,
			transparent 100%
		);
		color: var(--lightgray);
		height: 80px;
		width: 100%;
		z-index: 1000;
		font-size: 0.8rem;
		letter-spacing: 0.1rem;
		padding: 0;
		margin: 0;
		backdrop-filter: blur(8px);
		overflow-x: hidden;
	}

	.copyright,
	.spacer {
		flex: 1;
	}

	.copyright {
		margin: 0;
		padding-top: 15px;
		padding-left: 15px;
	}

	.links {
		display: flex;
		justify-content: center;
		flex: 2;
		gap: 25px;
		margin: 0;
		padding-top: 15px;
	}

	.links a {
		color: var(--lightgray);
		text-decoration: none;
		cursor: pointer;
	}

	.links a:hover {
		color: var(--lightblue);
		text-shadow: 0 0 10px var(--text-glow);
	}

	.links a:last-of-type {
		padding-right: 25px;
	}

	@media (max-width: 1080px) {
		.spacer {
			display: none;
		}

		.links {
			flex: 1;
			justify-content: flex-end;
		}

		
	}

	@media (max-width: 570px) {
		.footer {
			height: 40px;
		}

		.copyright {
			text-align: center;
			padding-top: 10px;
			font-size: 0.6rem;
		}

		.links,
		.links a,
		.spacer {
			display: none;
		}
	}

	@media (max-height: 750px) {
		.footer {
			height: 30px;
		}

		.copyright,
		.links {
			padding-top: 5px;
			font-size: 0.5rem;
		}
	}
</style>
