import '../resources/GameList.css'
import GamePhoto from './GamePhoto';

// Renders static games array for unauthenticated view.
export default function GameList(props) {

    return (
        <div className="game_list">
            { props.games.map((game) => (
                <GamePhoto 
                    photo={game.image}
                    photo_text={game.name}
                />
            ))}
        </div>
    );
}