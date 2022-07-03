import React from 'react'
import "./Sidebar.css"
import SidebarChannel from './SidebarChannel';

function Sidebar() {
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

                   </div>
        <div className="sidebar__channelsList">
             <SidebarChannel />
             <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
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
        <h3>SrikarK</h3>
        <p>#ID</p>
      </div>

      <div className="sidebar__profileIcons">
      🚧
      🚧
      🚧
      </div>
    </div>
  </div>
  );
}

export default Sidebar