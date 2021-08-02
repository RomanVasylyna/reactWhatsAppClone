import React from 'react';
// import { Button } from 'react-bootstrap';
import SideBar from '../components/SideBar';

const Dashboard = ({ userID, onLogout }) => {


    return (
        <div style={{ height:'100vh' }}>
            <div className="loginStatus ms-5 pb-3">
            </div>
            <SideBar userID={userID} onLogout={onLogout}/>
        </div>
    )
}

export default Dashboard
