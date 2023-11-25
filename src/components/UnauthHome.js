import { useEffect, useState } from "react";
import '../resources/UnauthHome.css';
import Cookie_Clicker from './Cookie_Clicker';
import GameList from "./GameList";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import StaffPhotos from "./StaffPhotos";

// The unauthenticated view of the homepage and root route.
export default function UnauthHome() {
    
    return (
        <div className="UnauthHome">
            <Navbar />
            <div className="headerbar">
                <h1 id="npgheader">NullPointerException Games</h1>
                <div id="cookie_clicker_cnt"><Cookie_Clicker /></div>
            </div>
            <div className="staff_box">
                <h2 id="staff_header">Meet the staff</h2>
                <StaffPhotos />
            </div>
            <div className="games_box">
                <h2 id="games_header">Games Catalog</h2>
                <div className="game_list_cnt"><GameList /></div>
            </div>
            <div className="bottom_bar" />
        </div>
    );
}