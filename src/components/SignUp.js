import '../resources/SignUp.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [formInput, setFormInput] = useState({
        username: '',
        password: '',
        confirmpassword: '',
        email: '',
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

    const handleEmailChange = (event) => {
        setFormInput((prevState) => {
            return { ...prevState, email: event.target.value }
        });
    }

    const handleConfirmChange = (event) => {
        setFormInput((prevState) => {
            return { ...prevState, confirmpassword: event.target.value }
        });
    }

    const navigate = useNavigate();
    const gotoLogin = () => navigate('/login')

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormInput({
            username: '',
            password: '',
            confirmpassword: '',
            email: '',
        });
        gotoLogin();
    }
    
    
    return (
        <div className='login'>
            <div className='top_header_box' />
            <div className='header_box' />
            <div className='login_box'>
                <h2 className='login_title'>Sign Up</h2>
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
                        <input 
                            className='input_box'
                            name='confirmpassword'
                            type='text'
                            placeholder='CONFIRM PASSWORD'
                            value={formInput.confirmpassword}
                            onChange={handleConfirmChange}
                        />
                        <input
                            className='input_box'
                            name='email'
                            type='text'
                            placeholder='EMAIL'
                            value={formInput.email}
                            onChange={handleEmailChange}
                        />
                        <button id='login_button' type='submit'>CONFIRM</button>
                    </form>
                </div>
            </div>
            <div className='footer_box' />
        </div>
    );
}