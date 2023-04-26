<script>
    import { get_songs } from "$lib/api.js";
    import { now_playing_title, now_playing_author } from "$lib/stores.js";
    import { Icon, Play, Backward, Forward } from "svelte-hero-icons";
</script>

<svelte:head>
    <title>Home - Svelteilator</title>
</svelte:head>

<div class="flex flex-col space-y-2 m-3">
	{#await get_songs()}
        {#each new Array(20) as a}
            <div class="song w-auto h-fill p-[30px]">
                <b class="text-2xl blur">Lorem ispum dolor sit amet</b>
                <br>
                <small class="text-lg blur">Lorem ispum</small>
            </div>
        {/each}
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
    <b>{$now_playing_title}</b> {$now_playing_author}
    <input type="range" min="1" max="100" value="1" class="w-full h-[10px] slider" id="slider">
    <Icon src={Backward} solid class="h-[20px]" />
    <Icon src={Play} solid class="h-[30px] text-center" />
</div>
