import React, { Component } from 'react';
import PropTypes from "prop-types";
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

export default class MessageSection extends Component {

    render() { 
        let {activeChannel} = this.props;
        console.log(this.props);
        return (  
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'>
                    <strong>{activeChannel !== undefined ? activeChannel.chanName : 'Canal não definido'}</strong>
                </div>
                <div className='panel-body messages'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}
 
MessageSection.PropTypes = {
    messages: PropTypes.array.isRequired,
    activeChannel: PropTypes.object.isRequired
}