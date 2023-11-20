import { useState } from "react";
import '../resources/AuthHome.css';
import Cookie_Clicker from './Cookie_Clicker';
import Labeled_Photo from './Labeled_Photo';
import brandon_photo from '../resources/BrandonPhoto.png';
import scott_photo from '../resources/ScottPhoto.png';
import thomas_photo from '../resources/ThomasPhoto.png';
import cole_photo from '../resources/ColePhoto.png';
import lovecraft_photo from '../resources/Lovecraft.png';
import devils_photo from '../resources/Devils.png';
import otter_photo from '../resources/Otter.png';
import ostrich_photo from '../resources/Ostrich_Jockey.png';
import EditGameList from "./EditGameList";
import NewGameBox from "./NewGameBox";
import { Link } from "react-router-dom";


// The authenticated view of the homepage and root route.
export default function AuthHome() {

    // The static sample array for the unauthenticated view.
    // This will be replaced when we implement MongoDB.
    const [games, setGames] = useState([
        {
            id: '1',
            image: lovecraft_photo,
            name: 'Lovecraft Legionary'
        },
        {
            id: '2',
            image: devils_photo,
            name: 'Dungeon Devils'
        },
        {
            id: '3',
            image: otter_photo,
            name: 'Grand Theft Otter'
        },
        {
            id: '4',
            image: ostrich_photo,
            name: 'Ostrich Jockey'
        },
    ]);

    const handleUpdateList = (enteredListData) => {
        const listData = {
            ...enteredListData,
            id: Math.random().toString()
        };
        setGames((prevGames) => {
            return [listData, ...prevGames]
        })
    }

    return (
        <div className="UnauthHome">
            <div className="navbar">
                <Link to='/' id="navtext">Log Out</Link>
            </div>
            <div className="headerbar">
                <h1 id="npgheader">NullPointerException Games</h1>
                <div id="cookie_clicker_cnt"><Cookie_Clicker /></div>
            </div>
            <div className="staff_box">
                <h2 id="staff_header">Meet the staff</h2>
                    <div className="staff_photos">
                        <Labeled_Photo photo={brandon_photo} photo_text='Brandon Barth' />
                        <Labeled_Photo photo={scott_photo} photo_text='Scott Wagner' />
                        <Labeled_Photo photo={thomas_photo} photo_text='Thomas Henderson' />
                        <Labeled_Photo photo={cole_photo} photo_text='Cole Lanham' />
                    </div>
            </div>
            <div className="games_box">
                <h2 id="games_header">Games Catalog</h2>
                <div className="game_list_cnt"><EditGameList games={games} /></div>
            </div>
            <div className="new_game_box_cnt">
                <NewGameBox onUpdateList={handleUpdateList} />
            </div>
            <div className="bottom_bar" />
        </div>
    );
}