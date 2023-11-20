import '../resources/GenerateGame.css';

// Generate new game image. Using a form as a placeholder
// box for new url.
export default function GenerateGame() {

    return (
        <div className='generate_game'>
            <div className='top_header_box' />
            <div className='header_box' />
            <div className='gen_box'> 
                <h2 className='login_title'>Generate New Image<br/>Link</h2>
                <div className='login_form_cnt'>
                    <form>
                        <div className='gen_input_ctr'>
                            <label className='gen_label'>New Generated Image Prompt:</label>
                            <input
                                className='gen_input_box'
                                placeholder='...'
                                name='prompt'
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
                    <button id='return_button'>RETURN TO HOMEPAGE</button>
                </div>
            </div>
            <div className='gen_footer_box' />
        </div>
    );
}