/**
* Gets a list of songs
*/
export async function get_songs() {
    const songs = await fetch("https://streamilator-sapi.pages.dev/songs.json").then(res => res.json());
    return songs.songs;
}
