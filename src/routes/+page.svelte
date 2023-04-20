<script>
    import { get_songs } from "$lib/api.js";
</script>

<svelte:head>
    <title>Home - Svelteilator</title>
</svelte:head>

<div class="container grid">
	{#await get_songs()}
        Loading...
    {:then songs} 
        {#each songs as song}
           <div class="song">
                <b>{song.name}</b>
                <br>
                <small>{song.author}</small>
           </div> 
        {/each}
    {:catch error}
        <code>{error}</code>
    {/await}
</div>
