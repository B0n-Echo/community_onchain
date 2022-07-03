import React  from 'react';
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