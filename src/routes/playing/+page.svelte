<script>
    import { now_playing_title, now_playing_author } from "$lib/stores.js";
</script>

<div class="flex flex-col h-screen justify-center items-center">
    <b class="text-2xl">{$now_playing_title}</b>
    <small class="text-lg">{$now_playing_author}</small>
</div>

<div class="fixed bottom-0 w-full h-[100px] p-[30px] justify-center text-center">
    <a href="/" class="bg-indigo-500 p-2 rounded-lg w-full">Back to songs</a>
    <input type="range" min="1" max="100" value="1" class="w-full h-[10px] slider" id="slider" on:input={() => {
        return;
    }}>
    <!-- <Icon src={Play} theme="solid" class="h-[30px] text-center" /> -->
</div>
