import React from 'react';
import { Button } from 'react-bootstrap';
import SideBar from '../components/SideBar';

const Dashboard = ({ userID, onLogout }) => {


    return (
        <div>
            <h3>Welcome, <strong>user { userID }</strong></h3>
            <Button variant="danger" onClick={() => onLogout('')}>Logout</Button>
            <SideBar userID={userID} />
        </div>
    )
}

export default Dashboard
