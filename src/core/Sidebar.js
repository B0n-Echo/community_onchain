import React from 'react'
import "./Sidebar.css"
import SidebarChannel from './SidebarChannel';

function Sidebar() {

  const handleAddChannel = function() {

  }

  
  return (
    <div className="sidebar">
    <div className="sidebar__top">
      <h3>Community Server</h3>
    </div>

    <div className="sidebar__channels">
      <div className="sidebar__channelsHeader">
        <div className="sidebar__header">
        <h4>Test here</h4>
        </div>

        <button onClick={handleAddChannel} className="sidebar__addChannel" />

       </div>

        <div className="sidebar__channelsList">
             <SidebarChannel channelName='Youtube' />
             <SidebarChannel  channelName='ABC'/>
              <SidebarChannel  channelName='React'/>
              <SidebarChannel  channelName='Team Meet'/>
        </div>
    </div>

    <div className="sidebar__voice">
      <div className="sidebar__voiceInfo">
        <h3>Voice Connected</h3>
        <p>Stream</p>
      </div>

      <div className="sidebar__voiceIcons">
      </div>
    </div>

    <div className="sidebar__profile">
      {/* <Avatar /> */}
      <div className="sidebar__profileInfo">
        <h3>User Name</h3>
        <p>@yourUserIdHere</p>
      </div>

      <div className="sidebar__profileIcons">
         Icons Here 
      🚧
      🚧
      </div>
    </div>
  </div>
  );
}

export default Sidebar