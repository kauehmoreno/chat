import React , { Component } from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';
import Socket from '../socket.js';
export default class App extends Component {

    constructor(props){
        super(props);

        this.addChannel = this.addChannel.bind(this);
        this.setChannel = this.setChannel.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this._onConnect = this._onConnect.bind(this);
        this._onDisconnect = this._onDisconnect.bind(this);
        this._onAddChannel = this._onAddChannel.bind(this);
        this._onAddUser = this._onAddUser.bind(this);
        this._onEditUser = this._onEditUser.bind(this);
        this._onRemoveUser = this._onRemoveUser.bind(this);
        this._onMessageAdd = this._onMessageAdd.bind(this);

        this.state = {
            channels: [],
            users: [],
            messages:[],
            activeChannel: {},
            connected: false
        }
    }

    componentDidMount(){
        let ws = new WebSocket("ws://localhost:8888")
        let socket = this.socket = new Socket(ws);
        socket.on('connect', this._onConnect);
        socket.on('disconnect', this._onDisconnect);
        socket.on('channel add', this._onAddChannel);
        socket.on('user add', this._onAddUser);
        socket.on('user edit', this._onEditUser);
        socket.on('user remove', this._onRemoveUser);
        socket.on('message add', this._onMessageAdd);
    }

    _onMessageAdd(message){
        debuger;
        let {messages} = this.state;
        messages.push({message});
        this.setState({messages});
    }

    _onRemoveUser(removeUser){
        let {users} = this.state;
        users = users.filter(user =>{
            return user.id !== removeUser.id;
        });
        this.setState({users});
    }

    _onEditUser(editUser){
        let {users} = this.state;
        users = users.map(user => {
            if(editUser.id == user.id){
                return editUser;
            }
            return user;
        });
        this.setState({users});
    }

    _onAddUser(user){
        let {users} = this.state;
        users.push(user);
        this.setState({users});
    }

    // Better place to handle with channel subscription
    _onConnect(){
        this.setState({connected: true});
        this.socket.emit('channel subscribe');
        this.socket.emit('user subscribe');
    }

    _onDisconnect(){
        this.setState({connected: false});
    }

    _onAddChannel(channel){
        let {channels} = this.state;
        channels.push(channel);
        this.setState({channels});
    }

    addChannel(name){
        this.socket.emit('channel add', {name});
    }

    setChannel(activeChannel){
        this.setState({activeChannel});
        this.socket.emit('message unsubscribe');
        this.setState({messages:[]});
        this.socket.emit('message subscribe', {'channelId': activeChannel.id});
    }

    setUserName(name){
        this.socket.emit('user edit', {name});
    }

    addMessage(body){
       let {activeChannel} = this.state;
       this.socket.emit(
           'message add',
           {'channelId': activeChannel.id, body}
        );
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