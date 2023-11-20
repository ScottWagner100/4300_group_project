import '../resources/Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// log in page
// Authentication is not setup yet, the button just
// redirects to authenticated view
export default function Login() {

    const [formInput, setFormInput] = useState({
        username: '',
        password: '',
    });

    const handleUsernameChange = (event) => {
        setFormInput((prevState) => {
            return { ...prevState, username: event.target.value };
        });
    }

    const handlePasswordChange = (event) => {
        setFormInput((prevState) => {
            return { ...prevState, password: event.target.value }
        });
    }

    const navigate = useNavigate();
    const gotoAuthHome = () => navigate('/auth')

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormInput({
            username: '',
            password: ''
        });
        gotoAuthHome();
    }
    
    return (
        <div className='login'>
            <div className='top_header_box' />
            <div className='header_box' />
            <div className='login_box'>
                <h2 className='login_title'>NullPointerGames<br/>Devs</h2>
                <div className='login_form_cnt'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            className='input_box'
                            name='username'
                            type='text'
                            placeholder='USERNAME'
                            value={formInput.username}
                            onChange={handleUsernameChange}
                        />
                        <input 
                            className='input_box'
                            name='password'
                            type='text'
                            placeholder='PASSWORD'
                            value={formInput.password}
                            onChange={handlePasswordChange}
                        />
                        <button id='login_button' type='submit'>LOGIN</button>
                    </form>
                    <p id='forgot_pw'>Forgot password?</p>
                </div>
            </div>
            <div className='footer_box' />
        </div>
    );
};