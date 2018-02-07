import React , { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

export default class App extends Component {

    constructor(props){
        super(props);

        this.addChannel = this.addChannel.bind(this);
        this.setChannel = this.setChannel.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.setUserName = this.setUserName.bind(this);

        this.state = {
            channels: [],
            users: [],
            messages:[]
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

    setChannel(activeChannel){
        this.setState({activeChannel});
        // TODO: get channels message
    }

    setUserName(name){
         // extract user from this.state
         console.log(this.state);
         let {users} = this.state;
         users.push({id: users.length, name});
         // subs user name into state cuz it matchs with name inside {}
         this.setState({users});
         // TODO send to server
    }

    addMessage(body){
        let {messages, users} = this.state;
        let createdAt = new Date;
        let author = users.length > 0 ? users[0].name: 'anônimo';
        messages.push({id: messages.length, body, createdAt, author});
        this.setState({messages});
    }

    render() {
        return (
            <div className='app'>
                <div className='nav'>
                    <ChannelSection 
                        {...this.state}
                        addChannel={this.addChannel}
                        setChannel={this.setChannel}
                    />
                    <UserSection 
                        {...this.state}
                        setUserName={this.setUserName}
                    />
                </div>
                <MessageSection
                    {...this.state} 
                    addMessage={this.addMessage}
                />
            </div>
        )
    }
}