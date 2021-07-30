import React from 'react';
import { Button } from 'react-bootstrap';
import SideBar from '../components/SideBar';

const Dashboard = ({ userID, onLogout }) => {


    return (
        <div style={{ height:'100vh' }}>
            <div className="loginStatus ms-5 pb-3">
            <p>Welcome, <strong>user { userID }</strong></p>
            <Button variant="danger" onClick={() => onLogout('')}>Logout</Button>
            </div>
            <SideBar userID={userID} />
        </div>
    )
}

export default Dashboard
