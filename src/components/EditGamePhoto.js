import axios from 'axios';
import '../resources/EditGamePhoto.css';

/* Holds the game photos, titles, edit, and delete buttons
  in the authenticated view.
  This component is poorly named and does not display the
  edit view, just the authenticated view. 
*/
export default function EditGamePhoto(props) {

    const handleDelete = (event) => {
        axios
        .delete(`http://localhost:4000/api/games/${props.gameId}`)
        .then(props.deleteGame(props.gameId))
        .catch((err) => {
            console.log('error deleting game data');
        });
    };

    return (
        <div className='game_photo_cnt'>
            <p id='edit_game_photo_name'>{props.photo_text}</p>
            <img src={props.photo} id='edit_game_photo' />
            <p id='photo_desc'>{props.desc}</p>
            <button 
            className='edit_button'>EDIT</button>
            <button 
            className='delete_button'
            onClick={handleDelete}
            >DELETE</button>
        </div>
    );
}