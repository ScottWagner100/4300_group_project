import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const [token, setToken] = useState();

    useEffect(() => {
        setToken(localStorage.getItem("auth-token"));
    }, []);

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.setItem("auth-token", "");
        token = "";
        navigate('/');
    }

    if (!token) {
        return (
            <div className="navbar">
                <Link to='/login' id="navtext">Log in / Sign up</Link>
            </div>
        );
    } else {
        return (
            <div className="navbar">
                <Link id="navtext" onClick={handleLogout}>Log Out</Link>
            </div> 
        );
    }
}