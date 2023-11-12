import React from "react";
import '../resources/GamePhoto.css';

export default function GamePhoto(props) {

    return (
        <div>
            <p id='game_photo_name'>{props.photo_text}</p>
            <img src={props.photo} id='game_photo' />
        </div>
    );
}