import React, { Component } from 'react';
import PropTypes from "prop-types";
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

export default class MessageSection extends Component {

    render() { 
        let {activeChannel} = this.props;
        return (  
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'>
                    <strong>{activeChannel.name || 'Escolha um Canal'}</strong>
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