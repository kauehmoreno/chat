import React, { Component } from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';
import PropTypes from "prop-types";

export default class ChannelSection extends Component {
    
    render(){
        return(
            <div>
                <ChannelList {...this.props} />
                <ChannelForm {...this.props} />
            </div>
        )
    }
}

ChannelSection.PropTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    addChannel: PropTypes.func.isRequired
}
