import React, {Component} from 'react';
import {useParams} from "react-router-dom";

function Profile () {
   const {id} = useParams();

        return (
            <div className="center-block text-center">
                <h2>User id: {id}</h2>
            </div>
        );

}

export default Profile;