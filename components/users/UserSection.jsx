import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';

export default class UserSection extends Component {
    render() { 
        return (  
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong> Usuário </strong>
                </div>
                <div className='panel-body users'>
                    <UserList {...this.props} />
                    <UserForm {...this.props} />
                </div>
            </div>
        )
    }
}
 
UserSection.PropTypes = {
    users: PropTypes.array.isRequired
}