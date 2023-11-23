import '../resources/NewGameBox.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// Contains the image generation form on
// the authenticated home page.
export default function NewGameBox(props) {

    const navigate = useNavigate();
    const gotoGen = () => navigate('/gen');

    const [gameInput, setGameInput] = useState({
        name: '',
        image: '',
        desc: '',
    });

    const handleTitleChange = (event) => {
        setGameInput((prevState) => {
            return { ...prevState, name: event.target.value };
        });
    }

    const handleUrlChange = (event) => {
        setGameInput((prevState) => {
            return { ...prevState, image: event.target.value };
        });
    }

    const handleDescChange = (event) => {
        setGameInput((prevState) => {
            return { ...prevState, desc: event.target.value };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:4000/api/games', {
                title: gameInput.name,
                description: gameInput.desc,
                image: gameInput.image
            })
            .then((res) => {
                setGameInput({
                    name: '',
                    image: '',
                    desc: '',
                });
            })
            .catch((err) => {
                console.log('error creating game item');
            });

        setGameInput({
            name: '',
            image: '',
            desc: '',
        });
    }
    
    return (
        <div className="new_game_box">
            <form onSubmit={handleSubmit}>
                <div className='input_cnt'>
                    <label id='image_title_label'>Image Title:</label>
                    <input
                        className='link_input'
                        placeholder='...'
                        type='text'
                        name='title'
                        value={gameInput.name}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className='input_cnt'>
                    <label id='image_title_label'>Image URL:</label>
                    <input 
                        className='link_input'
                        placeholder='...'
                        type='text'
                        name='url'
                        value={gameInput.image}
                        onChange={handleUrlChange}
                    />
                </div>
                <div className='input_ctr'>
                    <label id='desc_label'>Game Description:</label>
                    <textarea 
                        id='desc_input'
                        placeholder='...'
                        type='text'
                        name='desc'
                        value={gameInput.desc}
                        onChange={handleDescChange}
                    />
                </div>
                <button id='add_game_button' type='submit'>ADD NEW GAME</button>
            </form>
                <div className='add_game_button_cnt'>
                <button id='goto_gen_button' onClick={gotoGen}>GO TO GENERATE LINK</button>
            </div>
        </div>
    );
}