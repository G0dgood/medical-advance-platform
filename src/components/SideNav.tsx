import { NavLink } from 'react-router-dom';
import { PiUserLight } from "react-icons/pi";
import { PiLock } from "react-icons/pi";
import { PiBellSimple } from "react-icons/pi";
import { PiMoney } from "react-icons/pi";
import { PiTag } from "react-icons/pi";
import { CgCloud } from "react-icons/cg";
import { PiUsers } from "react-icons/pi";



const SideNav = () => {



  return (
    <div id="side-nav">

      <nav>

        <NavLink to="#" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "actives" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <PiUserLight size={25} />
          <span>Account</span>
        </NavLink>



        <NavLink to="#" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "actives" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <PiLock size={25} />
          <span>Security</span>
        </NavLink>





        <NavLink to="#" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "actives" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <PiBellSimple size={25} />
          <span>Notifications</span>
        </NavLink>

        <NavLink to="#" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "actives" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <PiMoney size={25} />
          <span>Pricing</span>
        </NavLink>

        <NavLink to="" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "actives" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <PiTag size={25} />
          <span>Sales</span>
        </NavLink>


        <NavLink to="/" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <PiUsers size={25} />
          <span>Users & Roles</span>
        </NavLink>

        <NavLink to="#" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "actives" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <CgCloud size={25} />
          <span>Backups</span>
        </NavLink>

      </nav>
    </div>
  )
}

export default SideNav;