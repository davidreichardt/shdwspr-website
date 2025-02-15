<script>
	import { RSI_ORG_LINK, DISCORD_LINK } from '../config.js';
</script>

<section class="footer">
	<p class="copyright">&#169;2025 Shadow Spear Initiative</p>
	<div class="links">
		<a href={RSI_ORG_LINK} rel="noopener noreferrer" target="_blank">RSI Org Page</a>
		<a href={DISCORD_LINK} rel="noopener noreferrer" target="_blank">Discord</a>
	</div>
	<div class="spacer"></div>
	<!-- empty div to center links -->
</section>

<style>
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		background: linear-gradient(
			to top,
			rgba(54, 56, 58, .9),
			rgba(54, 56, 58, 0.6) 75%,
			rgba(54, 56, 58, 0.2) 85%,
			transparent 100%
		);
		color: var(--lightgray);
		height: 80px;
		width: 100%;
		z-index: 1000;
		font-size: 0.8rem;
		padding: 0;
		backdrop-filter: blur(8px);
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
		text-decoration: underline;
	}

	.links a:last-of-type {
		padding-right: 25px;
	}
</style>
