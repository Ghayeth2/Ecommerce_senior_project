import React, {Component} from 'react';
import {request} from "../axios_helper";
import UserServices from "../services/UserServices";

class UsersComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        try {
            const response = await UserServices.getUsers();

            if (Array.isArray(response)) {
                this.setState({ users: response });
            } else {
                console.error("Data is not in the expected array format:", response);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map((user) => (
                        <div key={user.id}>
                            <p>{user.firstName}</p>
                            <p>{user.lastName}</p>
                            <p>{user.email}</p>
                            <p>{user.phoneNumber}</p>
                        </div>
                    ))}
            </div>
        );
    }
}

export default UsersComponent;