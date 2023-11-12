import React from "react";
import '../resources/UnauthHome.css';
import Cookie_Clicker from './Cookie_Clicker';

/*
/ The unauthenticated view of the homepage and root route.
*/
export default function UnauthHome() {

    return (
        <div className="UnauthHome">
            <div className="navbar">
                <p id="navtext">Log in</p>
            </div>
            <div className="headerbar">
                <h1 id="npgheader">NullPointerException Games</h1>
                <div id="cookie_clicker_cnt"><Cookie_Clicker /></div>
            </div>
            <div className="staff_box">
                <h2 id="staff_header">Meet the staff</h2>
                
            </div>
        </div>
    );
}