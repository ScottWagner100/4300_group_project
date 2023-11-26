import '../resources/SignUp.css'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import axios from 'axios';

export default function SignUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [username, setUsername] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const newUser = { email, password, confirmPassword, username };

            await axios.post('http://localhost:4000/api/users/signup', newUser);
            const loginRes = await axios.post('http://localhost:4000/api/users/login', {
                email,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem('auth-token', loginRes.data.token);
            setLoading(false);
            navigate('/');
        } catch (err) {
            setLoading(false);
            err.response.data.msg && setError(err.response.data.msg);
        }
    }
    
    return (
        <div className='login'>
            <div className='top_header_box' />
            <div className='header_box' />
            <div className='login_box'>
                <h2 className='login_title'>Sign Up</h2>
                {error && <Alert variant='danger' className='alert_msg'>{error}</Alert>}
                <div className='login_form_cnt'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='username'>
                            <Form.Control 
                                className='input_box'
                                type='name'
                                required
                                placeholder='USERNAME'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group id='email'>
                            <Form.Control 
                                className='input_box'
                                type='email'
                                required
                                placeholder='EMAIL'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Control 
                                className='input_box'
                                type='password'
                                required
                                placeholder='PASSWORD'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Control 
                                className='input_box'
                                type='password'
                                required
                                placeholder='CONFIRM PASSWORD'
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button id='login_button' disabled={loading} type='submit'>CONFIRM</Button>
                    </Form>
                </div>
            </div>
            <div className='footer_box' />
        </div>
    );
}