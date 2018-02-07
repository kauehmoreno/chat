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
        const chanName = node.value;
        this.props.addChannel(chanName);
        node.value = '';
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type='text' ref='channel' />
            </form>
        )
    }
}

ChannelForm.PropTypes = {
    addChannel: PropTypes.func.isRequired
}
