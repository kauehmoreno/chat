import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class ChannelForm extends Component{

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        const node = this.refs.channel;
        const name = node.value;
        this.props.addChannel(name);
        node.value = '';
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <input className='form-control' placeholder='Adicione um Canal' type='text' ref='channel' />
                </div>
            </form>
        )
    }
}

ChannelForm.PropTypes = {
    addChannel: PropTypes.func.isRequired
}
