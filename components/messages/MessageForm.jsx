import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';


export default class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        // this.state = {  }
    }

    onSubmit(event){
        event.preventDefault();
        const node = this.refs.message;
        const message = node.value;
        this.props.addMessage(message);
        node.value = '';
    }

    render() { 
        let input;
        if(this.props.activeChannel !== undefined){
            if(this.props.activeChannel.id !== undefined){
                input = (
                    <input
                    ref='message'
                    type='text'
                    className='form-control'
                    placeholder='Escreva uma mensagem...' />
                )   
            }
        }
        return (  
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    {input}
                </div>
            </form>
        )
    }
}
 
MessageForm.PropTypes = {
    activeChannel: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
}