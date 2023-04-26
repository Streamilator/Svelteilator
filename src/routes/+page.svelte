<script>
    import { get_songs } from "$lib/api.js";
    import { Icon, Play } from "svelte-hero-icons";
</script>

<svelte:head>
    <title>Home - Svelteilator</title>
</svelte:head>

<div class="flex flex-col space-y-2 m-3">
	{#await get_songs()}
        Loading...
    {:then songs}
        {#each songs as song}
           <div class="song w-auto h-fill p-[30px]" on:click={() => {
                alert("no");
            }}>
                <b class="text-2xl">{song.name}</b>
                <br>
                <small class="text-lg">{song.author}</small>
           </div> 
        {/each}
    {:catch error}
        <code>{error}</code>
    {/await}
</div>

<br><br><br><br><br>

<div class="fixed bottom-0 w-full h-[120px] p-[30px] justify-center text-center" style="background-color: rgb(29, 29, 29);">
    <b>nothing is playing</b>
    <input type="range" min="1" max="100" value="1" class="w-full h-[15px] slider" id="slider">
    <Icon src={Play} solid class="h-[30px] text-center" />
</div>
