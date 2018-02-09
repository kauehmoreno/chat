import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class UserForm extends Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        const node = this.refs.userName;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = '';
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <input
                        ref='userName'
                        type='text'
                        className='form-control'
                        placeholder='Digite seu nome...' />
                </div>
            </form>
        )
    }
}

UserForm.PropTypes = {
    setUserName: PropTypes.func.isRequired
}