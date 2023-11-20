import '../resources/GenerateGame.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Generate new game image. Using a form as a placeholder
// box for new url.
export default function GenerateGame() {

    const [promptText, setPromptText] = useState({prompt: ''})

    const handlePromptChange = (event) => {
        setPromptText((prevState) => {
            return { ...prevState, prompt: event.target.value }
        });
    }

    const handleGenerate = (event) => {
        event.preventDefault();
        setPromptText({prompt: ''})
    }

    const navigate = useNavigate();
    const gotoHome = () => navigate('/auth')

    return (
        <div className='generate_game'>
            <div className='top_header_box' />
            <div className='header_box' />
            <div className='gen_box'> 
                <h2 className='login_title'>Generate New Image<br/>Link</h2>
                <div className='login_form_cnt'>
                    <form onSubmit={handleGenerate}>
                        <div className='gen_input_ctr'>
                            <label className='gen_label'>New Generated Image Prompt:</label>
                            <input
                                className='gen_input_box'
                                placeholder='...'
                                name='prompt'
                                type='text'
                                value={promptText.prompt}
                                onChange={handlePromptChange}
                            />
                        </div>
                        <button id='gen_button' type='submit'>GENERATE</button>
                        <div className='gen_input_ctr'>
                            <label className='gen_label'>Resulting Image URL</label>
                            <input 
                                className='gen_input_box'
                                placeholder='...'
                            />
                        </div>
                    </form>
                    <button id='return_button' onClick={gotoHome}>RETURN TO HOMEPAGE</button>
                </div>
            </div>
            <div className='gen_footer_box' />
        </div>
    );
}