import { useEffect, useState } from 'react';
import '../resources/GameList.css'
import GamePhoto from './GamePhoto';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EditGamePhoto from './EditGamePhoto';

// Renders static games array for unauthenticated view.
export default function GameList(props) {

    const [games, setGames] = useState([]);

    const navigate = useNavigate();
    const gotoGen = () => navigate('/gen');
    const gotoAdd = () => navigate('/add');

    const [token, setToken] = useState();
    useEffect(() => {
        setToken(localStorage.getItem("auth-token"));
    }, []);

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

    if (!token) {
    return (
        <div className="game_list">
            { games.map((games) => (
                <GamePhoto 
                    photo={games.image}
                    photo_text={games.title}
                    desc={games.description}
                    key={games._id}
                />
            ))}
        </div>
    );
            } else {
                return (
                    <div>
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
                    <div className="footer_button_cnt">
                            <button id="add_game_link" onClick={gotoAdd}>ADD NEW GAME</button>
                            <button id="goto_gen_button" onClick={gotoGen}>GO TO GENERATE LINK</button>
                        </div>
                    </div>
                );
            }
}