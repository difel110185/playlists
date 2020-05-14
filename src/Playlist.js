import React, {useState} from "react";
import './Playlist.css';
import Song from "./Song";
import SongForm from "./SongForm";

function Playlist(props) {
    const [songs, setSongs] = useState(
        [
            {
                id: 1,
                title: "Avenged Sevenfold - Shepherd of Fire",
                stars: 3,
                liked: true
            },
            {
                id: 2,
                title: "Rainbow - Gates of Babylon",
                stars: 5,
                liked: true
            },
            {
                id: 3,
                title: "Septerra - Freedom of the Dark One",
                stars: 2
            },
            {
                id: 4,
                title: "Symphony X - Evolution (The Grand Design)",
                stars: 1
            },
        ]
    );

    const addSong = (title, stars, liked) => {
        const newSong = {
            title,
            stars,
            liked,
            id: songs.length+1
        }
        const newSongs = [...songs, newSong]
        setSongs(newSongs)
    };

    return (
        <div className="playlist">
            <h2 className="playlist__heading">{props.title}</h2>
            <ul>
                {songs.map(song => {
                    return <li key={song.id}><Song {...song}/></li>
                })}
            </ul>
            <SongForm addSong={addSong} />
        </div>
    );
}

export default Playlist;
