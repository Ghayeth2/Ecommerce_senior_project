import React, {Component} from 'react';
import {Link} from "react-router-dom";

// Or can use function instead of class and use :
// function UserComponent (props) {
// const { id, firstName, lastName, email, phoneNumber } = props
// return ( ... )
//} export default UserCompoenent;
// edit by mistake
class UsersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            phoneNumber: props.phoneNumber
        }
    }

    render() {
        return (
            <div>
                <Link to={{pathname: "/users/"+this.state.id}}><p>{this.state.id}</p></Link>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <p>{this.state.phoneNumber}</p>
            </div>
        );
    }
}

export default UsersComponent;