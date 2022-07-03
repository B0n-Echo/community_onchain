import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = ({children}) => {

    return (
       <div className="App">
       <Sidebar />
       </div>
    )
}

export default Dashboard;