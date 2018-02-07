import React ,{ Component } from 'react';
import Channel from './Channel.jsx';
import PropTypes from "prop-types";

export default class ChannelList extends Component{

    render(){
        return(
            <ul>{
                this.props.channels.map(chan => {
                    return <Channel
                        key={chan.id}
                        channel={chan}
                        {...this.props}
                    />
                })
            }</ul>
        )
    }
}


ChannelList.PropTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}
