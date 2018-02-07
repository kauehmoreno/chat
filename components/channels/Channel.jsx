import React, { Component } from 'react';
import PropTypes from "prop-types";


export default class Channel extends Component{

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        const { setChannel, channel } = this.props;
        setChannel(channel);
    }

    render(){
        const { channel } = this.props;
        console.log(channel);
        return(
            <li>
                <a onClick={this.onClick}>
                    {channel.chaName}
                </a>
            </li>
        )
    }
}

Channel.PropTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired
}
