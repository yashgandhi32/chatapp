import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageList from '../components/ListMessage';
import viewMessages from '../selectors/chathistory';
import '../styles/ListMessage.css';
import '../styles/index.css';


class MessageListContainer extends Component {

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;//100 added for almost bottom scenario
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    const { messages, to, from } = this.props;
    return (
        <MessageList
          friendName={to}
          messages={messages}
          me={from}
        />
    )
  }
}

MessageListContainer.propTypes = {
  messageList: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.shape({
    messageText: PropTypes.string.isRequired,
    messageid: PropTypes.string.isRequired,
    from: PropTypes.shape({ userid: PropTypes.string.isRequired, username: PropTypes.string.isRequired }),
    to: PropTypes.shape({ userid: PropTypes.string.isRequired, username: PropTypes.string.isRequired })
  }).isRequired
  ),
  to: PropTypes.string,
  from: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  messageList: state.messages,
  messages: viewMessages(state),
  to: state.to.username,
  from: state.from.userid
})

export default connect(mapStateToProps)(MessageListContainer); 