import { useEffect, useState } from 'react';
import ProfileDropDown from './ProfileDropDown';
import logo from '../assets/img/logo.png';
import product from '../assets/img/product.png';
import { AiTwotoneSetting } from "react-icons/ai";
import { PiBellSimple } from "react-icons/pi";
import { PiWallet } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GoChevronDown } from "react-icons/go";

import SearchInput from './SearchInput';

const Header = () => {


  const [notification, setNotification] = useState(false)
  const [createTask, setCreateTask] = useState(false)
  const [profile, setProfile] = useState(false)


  useEffect(() => {
    if (notification) {
      setCreateTask(false)
      setProfile(false)
    } else if (createTask) {
      setNotification(false)
      setProfile(false)
    } else if (profile) {
      setNotification(false)
      setCreateTask(false)
    }
  }, [createTask, notification, profile])




  const [title, setTitle] = useState("CRUD | UI");
  document.title = title;

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    if (window.location.pathname === "/") {
      setTitle("CRUD | Dashboard");
    } else if (window.location.pathname === "/") {
      setTitle("CRUD | Dashboard");
    }
  }, [title]);

  return (
    <div id="header">
      <div className="header-icon-container-flex">
        <div className="header-icon-container">
          <img
            src={logo}
            alt="Superleads Logo"
            className="header-logo"
          />
        </div>
        <SearchInput />
      </div>

      <div className='FaPlus-icon-container' >
        <span className='FaPlus-bell' onMouseEnter={() => setNotification(true)} onMouseLeave={() => setNotification(false)}>
          <div className='bell-notification-container'>
            <PiBellSimple size={20} color='#667185' />
            <div className='bell-notification'>Notifications</div>
          </div>

        </span>
        <span className='FaPlus-bell' onMouseEnter={() => setNotification(true)} onMouseLeave={() => setNotification(false)}>
          <div className='bell-notification-container'>
            <PiWallet size={20} color='#667185' />
            <div className='bell-notification'>Wallet</div>
          </div>


        </span>
        <span className='FaPlus-bell' onMouseEnter={() => setNotification(true)} onMouseLeave={() => setNotification(false)}>
          <div className='bell-notification-container'>
            <AiOutlineQuestionCircle size={20} color='#667185' />
            <div className='bell-notification'>Inquiries</div>
          </div>


        </span>
        <span className='FaPlus-bell' onMouseEnter={() => setNotification(true)} onMouseLeave={() => setNotification(false)}>
          <div className='bell-notification-container'>
            <AiTwotoneSetting size={20} color='#0D6EFD' />
            <div className='bell-notification' style={{ color: "#0D6EFD" }}>Settings</div>
          </div>


        </span>
        <div className='FaPlus-name-container'>
          <span className='FaPlus-name' onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)}>
            <img
              src={product}
              alt="Superleads Logo"
            // className="header-logo"
            />
            {profile && <ProfileDropDown />}
          </span>
          <span className='FaPlus-bell'>
            <GoChevronDown size={20} />
          </span>
        </div>
      </div>

    </div>
  )
}

export default Header;





