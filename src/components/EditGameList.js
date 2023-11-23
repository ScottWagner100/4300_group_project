import '../resources/EditGameList.css'
import EditGamePhoto from './EditGamePhoto';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Renders the array of games for authenticated view.
export default function EditGameList(props) {

    const [games, setGames] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:4000/api/games')
        .then((res) => {
            setGames(res.data);
        })
        .catch((err) => {
            console.log('error fetching game data');
        });
    }, []);

    const deleteGame = (id) => {
        setGames(games.filter(game => game._id !== id));
    };

    return (
        <div className="game_list">
            { games.map((game) => (
                <EditGamePhoto 
                    photo={game.image}
                    photo_text={game.title}
                    gameId={game._id}
                    desc={game.description}
                    key={game._id}
                    deleteGame={deleteGame}
                />
            ))}
        </div>
    );
}