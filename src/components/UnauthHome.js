import React from "react";
import '../resources/UnauthHome.css';

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
                
            </div>
        </div>
    );
}