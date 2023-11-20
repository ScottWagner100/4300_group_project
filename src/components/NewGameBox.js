import '../resources/NewGameBox.css';
import { useNavigate } from 'react-router-dom';

/* Contains the image generation form on
/  the authenticated home page. I did not
/  add functionality to the form as I'm not
/  sure what the ultimate vision is here.
*/
export default function NewGameBox() {

    const navigate = useNavigate();
    const gotoGen = () => navigate('/gen');

    return (
        <div className="new_game_box">
            <form>
                <div className='input_cnt'>
                    <label id='image_title_label'>Image Title:</label>
                    <input
                        className='link_input'
                        value='...'
                    />
                </div>
                <div className='input_cnt'>
                    <label id='image_title_label'>Image URL:</label>
                    <input 
                        className='link_input'
                        value='...'
                    />
                </div>
            </form>
                <div className='add_game_button_cnt'>
                <button id='add_game_button'>ADD NEW GAME</button>
                <button id='goto_gen_button' onClick={gotoGen}>GO TO GENERATE LINK</button>
            </div>
        </div>
    );
}