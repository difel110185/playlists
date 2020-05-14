import React, { useState } from 'react';
import './App.css';
import Playlist from "./Playlist";


function App() {
    const [title, setTitle] = useState("My Jamz");

    const editTitle = () => {
        const newTitle = prompt("What is your new title?")
        setTitle(newTitle)
    }

    return (
        <div className="App">
            <Playlist title={title} />
            <button onClick={editTitle}>Edit title</button>
        </div>
    );
}

export default App;
