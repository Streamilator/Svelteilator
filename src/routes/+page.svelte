<script>
    import { get_songs, play } from "$lib/api.js";
    import { now_playing_title, now_playing_author } from "$lib/stores.js";
    import { Icon } from "@steeze-ui/svelte-icon";
    import { Play, Pause } from "@steeze-ui/heroicons";
</script>

<svelte:head>
    <title>{$now_playing_title && $now_playing_author ? `${$now_playing_title} by ${$now_playing_author} - Streamilator` : "Home - Svelteilator"}</title>
</svelte:head>

<div class="flex flex-col space-y-2 m-3">
	{#await get_songs()}
        {#each new Array(20) as a}
            <div class="song-no-transition w-auto h-fill p-[30px]">
                <b class="text-2xl blur">Lorem ispum dolor sit amet</b>
                <br>
                <small class="text-lg blur">Lorem ispum</small>
            </div>
        {/each}
    {:then songs}
        <a href="/playing" id="playing">playing</a>
        {#each songs as song}
           <div class="song w-auto h-fill p-[30px]" id={song.id} on:click={() => {
                now_playing_title.set(song.title);
                now_playing_author.set(song.author);

                play(song.id);
            }}>
                <b class="text-2xl">{song.title}</b>
                <br>
                <small class="text-lg">{song.author}</small>
           </div>
        {/each}
    {:catch error}
        <code>{error}</code>
    {/await}
</div>
