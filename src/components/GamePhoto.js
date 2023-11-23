import '../resources/GamePhoto.css';

// Holds the game photos and titles in the unauthenticated view.
export default function GamePhoto(props) {

    return (
        <div>
            <p id='game_photo_name'>{props.photo_text}</p>
            <img src={props.photo} id='game_photo' />
            <p id='photo_desc'>{props.desc}</p>
        </div>
    );
}