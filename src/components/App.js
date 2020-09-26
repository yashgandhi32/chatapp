import React from 'react';
import MessageListContainer from '../containers/MessageListContainer';
import ComposeBoxContainer from '../containers/MessageCompContainer';

const App = () => {

    return (
        <div >
            <div className='right-container' >
                <MessageListContainer />
                <ComposeBoxContainer />
            </div >

        </div >
    )

}

export default App;