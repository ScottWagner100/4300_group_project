// Game list, conditionally renders sample list for unauthenticated users
import '../resources/EditGameList.css'
import EditGamePhoto from './EditGamePhoto';

// or full list for authenticated users.
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