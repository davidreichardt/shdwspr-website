<script>
    import { onMount } from "svelte";

    let members = [];
    let error = '';

    onMount(async () => {
        console.log('Fetching members...');
        try {
            const res = await fetch('../api/org-members');
            const data = await res.json();

            if (data.error) {
                error = data.error;
            } else {
                members = data.members;
                console.log('Members fetched:', members);
            }
        }
        catch (err) {
            error = err.message;
            console.error('Error fetching members:', err);
        }
    });
</script>

{#if error}
    <p class="error">{error}</p>
{:else}
    <ul>
        {#each members as member}
        <li>{member.display} - {member.rank}</li>
        {/each}
    </ul>
{/if}