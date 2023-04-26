<script>
    import { get_songs } from "$lib/api.js";
</script>

<svelte:head>
    <title>Home - Svelteilator</title>
</svelte:head>

<div class="flex space-x-2 overflow-y-auto h-[200px] m-3">
	{#await get_songs()}
        Loading...
    {:then songs}
        {#each songs as song}
           <div class="song w-auto h-auto p-[30px]">
                <b>{song.name}</b>
                <br>
                <small>{song.author}</small>
           </div> 
        {/each}
    {:catch error}
        <code>{error}</code>
    {/await}
</div>

<div class="fixed bottom-0 w-full h-[120px] p-[30px] justify-center text-center" style="background-color: rgb(29, 29, 29);">
    <b>Your mom</b>
    <small>Someone's mom</small>
    <input type="range" min="1" max="100" value="1" class="w-full h-[15px] slider" id="slider">
    play
</div>
