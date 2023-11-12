import '../resources/Labeled_Photo.css';

// Holds dev images and names.
export default function Labeled_Photo(props) {

    return (
        <div>
            <p id='photo_name'>{props.photo_text}</p>
            <img src={props.photo} id='photo' />
        </div>
    );
}