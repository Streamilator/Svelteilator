/**
* Gets a list of songs
* @returns {Promise<object[]>} A list of songs
*/
export async function get_songs() {
    const songs = await fetch("https://sapi.streamilator.tk/songs.json").then(res => res.json());
    return songs.songs;
}
