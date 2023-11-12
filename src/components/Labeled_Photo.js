import React from "react";
import '../resources/Labeled_Photo.css';

export default function Labeled_Photo(props) {

    return (
        <div>
            <p id='photo_name'>{props.photo_text}</p>
            <img src={props.photo} id='photo' />
        </div>
    );
}