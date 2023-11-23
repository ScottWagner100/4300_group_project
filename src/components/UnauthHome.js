import { useState } from "react";
import '../resources/UnauthHome.css';
import Cookie_Clicker from './Cookie_Clicker';
import Labeled_Photo from './Labeled_Photo';
import brandon_photo from '../resources/BrandonPhoto.png';
import scott_photo from '../resources/ScottPhoto.png';
import thomas_photo from '../resources/ThomasPhoto.png';
import cole_photo from '../resources/ColePhoto.png';
import GameList from "./GameList";
import { Link } from "react-router-dom";

// The unauthenticated view of the homepage and root route.
export default function UnauthHome() {

    return (
        <div className="UnauthHome">
            <div className="navbar">
                <Link to='/login' id="navtext">Log in / Sign up</Link>
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
                <div className="game_list_cnt"><GameList /></div>
            </div>
            <div className="bottom_bar" />
        </div>
    );
}