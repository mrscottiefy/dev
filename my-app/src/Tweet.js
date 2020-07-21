import React from 'react';
import './Tweet.css';

function Tweet({ name, message, likes }) {
    return (
        <div className="Tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <p>{likes}</p>
        </div>
    );
}

export default Tweet;