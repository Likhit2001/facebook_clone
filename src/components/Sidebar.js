import React from 'react';
import "../Css/Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GroupIcon from '@material-ui/icons/Group';
import { useStateValue } from './StateProvider';
function Sidebar() {

  const[{user},dispatch] = useStateValue();

  return (
    <div className='sidebar'>
        <SidebarRow src={user.photoURL} title={user.displayName}/>
        <SidebarRow Icon={LocalHospitalIcon}  title="Covid-19 information Center" />
        <SidebarRow Icon={EmojiFlagsIcon}  title="Pages" />
        <SidebarRow Icon={GroupIcon}  title="Friends" />
        <SidebarRow Icon={ChatIcon}  title="Messengers"/>
        <SidebarRow Icon={StorefrontIcon}  title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon}  title="Videos"/>
        <SidebarRow Icon={ExpandMoreIcon}  title="Marketplace"/>
        <SidebarRow/>
    </div>
  )
}

export default Sidebar