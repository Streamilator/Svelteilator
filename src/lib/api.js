/**
* Gets a list of songs
*/
export async function get_songs() {
    const songs = await fetch("https://semi-api.streamilator-01z.pages.dev/songs.json").then(res => res.json());
    return songs.songs;
}

/**
* Plays the song with the specified song ID
* @param {number} id The song ID to play
*/
export function play(id) {
    const audio = new Audio(`https://semi-api.streamilator-01z.pages.dev/songs/${id}.mp3`);
    audio.play();
}
