import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Chat from './Chat';
import  './Dashboard.css';

const Dashboard = ({children}) => {

    return (
       <div className="App dashboard-container ">
       <Sidebar />
       <Chat/>
       </div>
    )
}

export default Dashboard;