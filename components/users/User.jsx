import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {
    render(){
        return(
            <li>
                {this.props.user.name}
            </li>
        )
    }
}

User.PropTypes = {
    user: PropTypes.object.isRequired
}
