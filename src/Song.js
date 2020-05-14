import React from "react";
import './Song.css';
import titleCase from './titleCase'

function Song(props) {
    let classes = "song";

    if (props.stars >= 5)
        classes += " good";
    else if (props.stars <= 1)
        classes += " bad";

    let stars = "";
    for (let i = 0; i < props.stars; i++)
        stars += "⭐";

    return (
        <div className={classes}>
            <span>{titleCase(props.title) + (props.liked ? ' ❤️' : '')}</span>
            <span>{stars}</span>
        </div>
    )
}

export default Song;
