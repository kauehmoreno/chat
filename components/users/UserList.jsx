import React, { Component } from 'react';
import PropTypes from "prop-types";
import User from './User.jsx';

export default class UserList extends Component{

    render(){
        console.log(this.props);
        return(
            <ul>{
               this.props.users.map(user => {
                return (
                    <User 
                        key={user.id}
                        user={user}
                    />)
               }) 
            }</ul>
        )
    }
}

UserList.PropTypes = {
    users: PropTypes.array.isRequired,
}
