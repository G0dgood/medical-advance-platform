import { NavLink } from 'react-router-dom';
import { ReactComponent as MAP } from "../assets/svg/map.svg";
import { ReactComponent as Dashboard } from "../assets/svg/grid.svg";
import { ReactComponent as Inventory } from "../assets/svg/box.svg";
import { ReactComponent as Procurement } from "../assets/svg/cartActive.svg";
import { ReactComponent as Finance } from "../assets/svg/money.svg";
import { ReactComponent as Communication } from "../assets/svg/chats.svg";
import { ReactComponent as Calendar } from "../assets/svg/calendar.svg";
import { ReactComponent as Contracts } from "../assets/svg/sign-doc.svg";
import { ReactComponent as Question } from "../assets/svg/question-circle.svg";
import { ReactComponent as Settings } from "../assets/svg/settings.svg";
import { ReactComponent as Signout } from "../assets/svg/sign-out.svg";
import { ReactComponent as Up } from "../assets/svg/Up.svg";
import { ReactComponent as Down } from "../assets/svg/Down.svg";
import benson from "../assets/img/Benson.png"
import { useEffect, useState } from 'react';

const SideNav = () => {

  const [dropdownOpen, setDropdownOpen] = useState(
    localStorage.getItem('dropdownOpen') === 'true'
  );

  const toggleDropdown = () => {
    const newState: any = !dropdownOpen;
    setDropdownOpen(newState);
    localStorage.setItem('dropdownOpen', newState);
  };

  useEffect(() => {
    const storedState = localStorage.getItem('dropdownOpen') === 'true';
    if (dropdownOpen !== storedState) {
      setDropdownOpen(storedState);
    }
  }, [dropdownOpen]);

  return (
    <div id="side-nav">
      <div id="side-nav-flex-container">
        <div>
          <div className='logo_container'>
            <MAP />
          </div>
          <nav>

            <NavLink to="#" className={({ isActive }) =>
              [
                "nav-link",
                isActive ? "actives" : null,
              ]
                .filter(Boolean)
                .join(" ")
            }>
              <Dashboard />
              <span>Dashboard</span>
            </NavLink>

            <NavLink to="#" className={({ isActive }) =>
              [
                "nav-link",
                isActive ? "actives" : null,
              ]
                .filter(Boolean)
                .join(" ")
            }>
              <Inventory />
              <span>Inventory</span>
            </NavLink>

            <div className="nav-link" onClick={toggleDropdown}>
              <div className="nav_dropdown_container">
                <div className="nav_dropdown_container_sub">
                  <Procurement />
                  <span>Procurement</span>
                </div>
                {dropdownOpen ? <Down /> : <Up />}
              </div>
            </div>
            {dropdownOpen && (
              <>
                <NavLink to="/" className={({ isActive }) =>
                  [
                    "nav-link",
                    isActive ? "active" : null,
                  ]
                    .filter(Boolean)
                    .join(" ")
                }  >
                  <div />
                  <span className='Quotes_ml_3'>Quotes</span>
                </NavLink>
                <NavLink to="/orders" className={({ isActive }) =>
                  [
                    "nav-link",
                    isActive ? "active" : null,
                  ]
                    .filter(Boolean)
                    .join(" ")
                }  >
                  <div />
                  <span className='Quotes_ml_3'>Orders</span>
                </NavLink>

              </>)}
            <NavLink to="" className={({ isActive }) =>
              [
                "nav-link",
                isActive ? "actives" : null,
              ]
                .filter(Boolean)
                .join(" ")
            }  >
              <Finance />
              <div className='actives_dan_Calendar_flex'>
                <span>Finance</span>  <Down />
              </div>
            </NavLink>

            <NavLink to="#" className={({ isActive }) =>
              [
                "nav-link",
                isActive ? "actives" : null,
              ]
                .filter(Boolean)
                .join(" ")
            }  >
              <Communication />
              <div className='actives_dan_Calendar_flex'>
                <span>Communication</span> <span className='actives_dan_Calendar' >10</span>
              </div>
            </NavLink>

            <NavLink to="#" className={({ isActive }) =>
              [
                "nav-link",
                isActive ? "actives" : null,
              ]
                .filter(Boolean)
                .join(" ")
            }  >
              <Calendar />
              <div className='actives_dan_Calendar_flex'>
                <span>Calendar</span> <span className='actives_dan_Calendar' >10</span>
              </div>

            </NavLink>
            <NavLink to="#" className={({ isActive }) =>
              [
                "nav-link",
                isActive ? "actives" : null,
              ]
                .filter(Boolean)
                .join(" ")
            }  >
              <Contracts />
              <span>Contracts</span>
            </NavLink>

          </nav>
        </div>
        <div className='dashboard-back-container'>
          <div className='dashboard-back-Support'>
            <div className='Support_float'>
              <Question />
              <p>Support</p>
            </div>
            <div className='Support_float'>
              <Settings />
              <p>Settings</p>
            </div>
          </div>

          <div className='dashboard-back-container-sub'>
            <div className='Benson_container_image'>
              <img src={benson} alt="benson" />
            </div>
            <div className='Benson_container'>
              <h6>Mark Benson</h6>
              <p>markbenson@coremed.com</p>
            </div>
            <Signout />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav;