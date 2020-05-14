import React, { useState } from 'react';
import './SongForm.css';

function SongForm(props) {
    const [title, setTitle] = useState("") // 1
    const [stars, setStars] = useState(1)
    const [liked, setLiked] = useState(false)

    const handleTitle = (e) => { // 2
        setTitle(e.target.value)
    }

    const handleStars = (e) => {
        setStars(e.target.value)
    }

    const handleLiked = (e) => {
        setLiked(e.target.checked)
    }

    const handleSubmit = e => {
        e.preventDefault() // to stop the page from refreshing
        props.addSong(title, stars, liked)
    }

    return (
        <form  onSubmit={handleSubmit}>
            <label>
                <p>Title</p>
                <input type="text" onChange={handleTitle} value={title}/>
            </label>
            <label>
                <p>Stars</p>
                <input type="number" onChange={handleStars} value={stars}/>
            </label>

            <label>
                <p>Liked</p>
                <input type="checkbox" onChange={handleLiked} value={liked}/>
            </label>

            <div>
                <input type="submit" value="Add song" />
            </div>
        </form>
    )
}
export default SongForm;
