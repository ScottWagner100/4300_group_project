import '../resources/Edit.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Allows the editing of database items
export default function Edit(props) {

    const location = useLocation();
    let gameId = location.state.gameId;

    const navigate = useNavigate();

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

    useEffect(() => {
        axios
        .get(`http://localhost:4000/api/games/${gameId}`)
        .then((res) => {
            setGameInput({
                name: res.data.title,
                desc: res.data.description,
                image: res.data.image,
            });
        })
        .catch((err) => {
            console.log('error fetching game data');
        });
    }, [gameId])

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const gameData = {
            title: gameInput.name,
            description: gameInput.desc,
            image: gameInput.image
        };
        axios
        .put(`http://localhost:4000/api/games/${gameId}`, gameData)
        .then((res) => {
            navigate('/');
        })
        .catch((err) => {
            console.log('error updating game data');
        });
    };
    
    return (
        <div>
        <div className='new_game_top' />
        <div className='new_game_header' />
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
                <div className='new_game_buttons'>
                    <button id='add_game_button' type='submit'>CONFIRM</button>
                </div>
            </form>
        </div>
        <div className='new_game_header' />
        </div>
    );
}