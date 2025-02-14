<script>
	import { RSI_ORG_LINK, DISCORD_LINK } from '../config.js';
</script>

<section class="footer">
	<p class="copyright">&#169;2025 Shadow Spear Initiative</p>
	<div class="links">
		<a href={RSI_ORG_LINK} rel="noopener noreferrer" target="_blank">RSI Organization Page</a>
		<a href={DISCORD_LINK} rel="noopener noreferrer" target="_blank">Discord</a>
	</div>
</section>

<style>
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		bottom: 0;
		background-color: #333;
		color: white;
		height: 50px;
		width: 100%;
        z-index: 1000;
}

	.copyright {
		margin: 0;
		padding: 15px 0 15px 15px;
	}

	.links {
		display: flex;
		gap: 20px;
		margin: 0;
		padding: 0;
	}

	.links a {
		color: white;
		text-decoration: none;
		padding: 15px;
	}

	.links a:last-of-type {
		padding-right: 25px;
	}
</style>
