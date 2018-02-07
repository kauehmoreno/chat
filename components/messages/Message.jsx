import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fecha from 'fecha'; 


export default class Message extends Component {

    constructor(props){
        super(props);
    }
    
    render(){
        let {message} = this.props;
        let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD')
        return(
            <li>
                <div className='author'>
                    <strong>{message.author}</strong>
                    <i className='timestamp'>{createdAt} </i>
                </div>
                <div className='body'> {message.body} </div>
            </li>
        )
    }
}

Message.PropTypes = {
    message: PropTypes.object.isRequired
}