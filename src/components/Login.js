import '../resources/Login.css'
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Card, Alert, Container, FormControl } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import axios from 'axios';

// log in page
// Authentication is not setup yet, the button just
// redirects to authenticated view
export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);
    
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const loginUser = { email, password };
            const loginRes = await axios.post('http://localhost:4000/api/users/login', loginUser)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem('auth-token', loginRes.data.token);
            navigate('/auth');
        } catch (err) {
            setLoading(false);
            err.response.data.msg && setError(err.response.data.msg);
        }
    }

    return (
        <div className='login'>
            <div className='top_header_box' />
            <div className='header_box' />
            {error && <Alert variant='danger'>{error}</Alert>}
            <div className='login_box'>
                <h2 className='login_title'>NullPointerGames<br/>Devs</h2>
                <div className='login_form_cnt'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Control 
                            className='input_box' 
                            type='email' required 
                            onChange={e => setEmail(e.target.value)} 
                            placeholder='EMAIL'
                            />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Control 
                            className='input_box' 
                            type='password' required
                            onChange={e => setPassword(e.target.value)}
                            placeholder='PASSWORD'
                            />
                        </Form.Group>
                        <Button 
                            id='login_button' 
                            type='submit'
                            disabled={loading}>
                            LOGIN
                        </Button>
                    </Form>
                    <Link to='/signup' id='sign_up_button'>Sign Up</Link>
                </div>
            </div>
            <div className='footer_box' />
        </div>
    );
};