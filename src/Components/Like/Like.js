import React from "react";
import { useState } from "react";
import './Like.css';

const Like = () => {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }

    const handleDislike = () => {
        setLikes(likes - 1);
    }

    return (
        <div className="like">
            <button name="unlike" onClick={handleDislike}><i className="fa-solid fa-thumbs-down"></i></button>
            <p>{likes}</p>
            <button name="like" onClick={handleLike}><i className="fa-solid fa-thumbs-up"></i></button>
        </div>
    );
}

export default Like;
