import { useEffect, useState } from 'react';
import '../resources/GameList.css'
import GamePhoto from './GamePhoto';
import axios from 'axios';

// Renders static games array for unauthenticated view.
export default function GameList(props) {

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

    return (
        <div className="game_list">
            { games.map((games) => (
                <GamePhoto 
                    photo={games.image}
                    photo_text={games.title}
                    desc={games.description}
                />
            ))}
        </div>
    );
}