import { useEffect, useState } from 'react';
import product from '../assets/img/Avatars.png';
import { GoChevronDown } from "react-icons/go";
import { ReactComponent as Bell } from "../assets/svg/bell.svg";
import { ReactComponent as Chat } from "../assets/svg/Chat.svg";
import SearchInput from './SearchInput';

const Header = () => {

  const [title, setTitle] = useState("MAP | UI");
  document.title = title;

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    if (window.location.pathname === "/") {
      setTitle("MAP | Dashboard");
    } else if (window.location.pathname === "/orders") {
      setTitle("MAP | Orders");
    }
  }, [title]);

  return (
    <div id="header">
      <div className="header-icon-container-flex">
      </div>

      <div className='FaPlus-icon-container' >
        <SearchInput />
        <span className='FaPlus-bell'  >
          <div className='bell-notification-container'>
            <Bell />
          </div>
        </span>
        <span className='FaPlus-bell'  >
          <div className='bell-notification-container'>
            <Chat />
          </div>
        </span>
        <div className='FaPlus-name-container'>
          <span className='FaPlus-name'  >
            <img
              src={product}
              alt="Superleads Logo"
            />
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





