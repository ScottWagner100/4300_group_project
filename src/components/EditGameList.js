import '../resources/EditGameList.css'
import EditGamePhoto from './EditGamePhoto';

// Renders the array of games for authenticated view.
export default function EditGameList(props) {

    return (
        <div className="game_list">
            { props.games.map((game) => (
                <EditGamePhoto 
                    photo={game.image}
                    photo_text={game.name}
                />
            ))}
        </div>
    );
}