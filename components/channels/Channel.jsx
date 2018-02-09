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
        const { channel, activeChannel } = this.props;
        const active = channel === activeChannel ? 'active' : '';

        return(
            <li className={active}>
                <a onClick={this.onClick}>
                    {channel.name}
                </a>
            </li>
        )
    }
}

Channel.PropTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}
