import { useState } from "react";
import cookie from '../resources/CookieClick.png';
import '../resources/Cookie_Clicker.css';

export default function Cookie_Clicker() {

    const [clicks, setClicks] = useState(0);
    const handleCookieClick = () => setClicks(clicks + 1);

    return (
        <div className="cookie_clicker">
            <p id="cookie_clicker_click_me" className="cookie_text">click me!</p>
            <img src={cookie} id="cookie_img" alt='Cookie Image' onClick={handleCookieClick}/>
            <p id="click_counter">{clicks}</p>
    </div>
    );
}