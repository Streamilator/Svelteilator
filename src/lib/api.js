/**
* Gets a list of songs
*/
export async function get_songs() {
    const songs = await fetch("https://semi-api.streamilator-01z.pages.dev/songs.json").then(res => res.json());
    const songs_array = [];

    for (const property in songs.names) {
        songs_array.push({
            "id": property,
            "title": songs.names[property].split(": ")[0],
            "author": songs.names[property].split(": ")[1]
        });
    }

    return songs_array;
}

/**
* Plays the song with the specified song ID
* @param {number} id The song ID to play
*/
export function play(id) {
    const audio = new Audio(`https://semi-api.streamilator-01z.pages.dev/songs/${id}.mp3`);
    audio.play();
}
