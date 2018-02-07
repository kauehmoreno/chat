import React , { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

export default class App extends Component {

    constructor(props){
        super(props);

        this.addChannel = this.addChannel.bind(this);
        this.setChannel = this.setChannel.bind(this);
        this.state = {
            channels: []
        }
    }

    addChannel(chaName){
        // extract channels from this.state
        let {channels} = this.state;
        channels.push({id: channels.length, chaName});
        // subs channels name into state cuz it matchs with name inside {}
        this.setState({channels});
        // TODO send to server
    }

    setChannel(activeChan){
        this.setState({activeChan});
        // TODO: get channels message
    }

    render() {
        return (
            <ChannelSection 
                channels={this.state.channels}
                addChannel={this.addChannel}
                setChannel={this.setChannel}
            />
        )
    }
}