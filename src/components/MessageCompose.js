import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MessageCompose.css';

const MessageCompose = ({ handleSubmit, handleChange, value }) => {
    return (
        <form onSubmit={handleSubmit} className="padded-container">
            <input
                type="text"
                placeholder="Type a message"
                value={value}
                onChange={handleChange}
                className="search" />
            <button className='fill'>
                <i className="fa fa-send-o"></i>
            </button>
        </form>
    )
}

MessageCompose.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default MessageCompose;
