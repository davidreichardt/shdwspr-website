<script lang="ts">
    let activePopover: string | null = null;

    function togglePopover(branch: string | null) {
        activePopover = activePopover === branch ? null : branch;
    }
</script>

<section class="hero-container">
	<h1 class="tagline">Forge Your Own Path</h1>
	<a href="/join" class="btn join-btn">Join Now</a>
	<p>
		Welcome to Shadow Spear Initiative. We are an organization that provides the freedom and support
		to forge your own path in the 'verse. Your destiny is yours to shape - stand with SHDWSPR.
	</p>
    <div class="branch-buttons">
        <button class="btn branch-btn" on:click={() => togglePopover('Tactical')}>Spear Tactical</button>
        <button class="btn branch-btn" on:click={() => togglePopover('Logistics')}>Spear Logistics</button>
        <button class="btn branch-btn" on:click={() => togglePopover('Recon')}>Spear Recon</button>
        <button class="btn branch-btn" on:click={() => togglePopover('Guardian')}>Spear Guardian</button>
    </div>
    <div class="popover" class:show={activePopover === 'Tactical'}>
        <h2>Spear Tactical</h2>
        <h3>Combat and Security</h3>
        <p>
            SHDWSPR’s combat arm, responsible for bounty hunting, fleet security, mercenary work, and private military operations. Spear Tactical ensures that contracts are fulfilled with precision and firepower, protecting both members and allies.
        </p>
        <button on:click={() => togglePopover(null)}>Close</button>
    </div>
    <div class="popover" class:show={activePopover === 'Logistics'}>
        <h2>Spear Logistics</h2>
        <h3>Resource and Trade</h3>
        <p>
            A crucial component of SHDWSPR, handling mining, salvaging, hauling, and trading to fund and supply the Initiative. Spear Logistics ensures that ships stay fueled, weapons stay stocked, and profits keep flowing.
        </p>
        <button on:click={() => togglePopover(null)}>Close</button>
    </div>
    <div class="popover" class:show={activePopover === 'Recon'}>
        <h2>Spear Recon</h2>
        <h3>Exploration and Intel</h3>
        <p>
            The eyes and ears of SHDWSPR, specializing in deep-space scouting, surveillance, and data gathering. Spear Recon discovers strategic locations, hidden routes, and valuable resources to give the Initiative an edge.
        </p>
        <button on:click={() => togglePopover(null)}>Close</button>
    </div>
    <div class="popover" class:show={activePopover === 'Guardian'}>
        <h2>Spear Guardian</h2>
        <h3>Medical and Support</h3>
        <p>
            SHDWSPR’s humanitarian branch, providing medical aid, repair services, and emergency response to members and allies. Spear Guardian ensures that the Initiative’s ships and crew are kept in top condition, ready for any challenge.
        </p>
        <button on:click={() => togglePopover(null)}>Close</button>
    </div>
</section>

<style>
    .hero-container {
        height: 100vh;
        overflow: hidden;
        width: 100%;
        background: url('/images/hero-polaris.jpeg') center/cover no-repeat;
        padding: 0;
        margin: 0;
    }
</style>