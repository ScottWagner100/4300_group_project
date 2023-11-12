import '../resources/NewGameBox.css';

export default function NewGameBox() {

    return (
        <div className="new_game_box">
            <form>
                <div className='input_cnt'>
                    <label id='image_title_label'>Image Title:</label>
                    <input
                        className='link_input'
                        value='...'
                    />
                </div>
                <div className='input_cnt'>
                    <label id='image_title_label'>Image URL:</label>
                    <input 
                        className='link_input'
                        value='...'
                    />
                </div>
            </form>
                <div className='add_game_button_cnt'>
                <button id='add_game_button'>ADD NEW GAME</button>
                <button id='goto_gen_button'>GO TO GENERATE LINK</button>
            </div>
        </div>
    );
}