import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';


export default class MessageList extends Component {
    render() { 
        return (  
            <ul>{
                this.props.messages.map(message => {
                    return(
                        <Message
                            key={message.id}
                            message={message}
                        />
                    )
                })
            }</ul>
        )
    }
}
 
MessageList.PropTypes = {
    messages: PropTypes.array.isRequired
}
