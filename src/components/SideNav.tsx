import { NavLink } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { HiOutlineCalendar, HiOutlineRectangleStack } from "react-icons/hi2";
import { FiUserPlus } from "react-icons/fi";

const SideNav = () => {



  return (
    <div id="side-nav">
      {/* <div className="logo-area">
        <SiGoogleadsense size={35} className="logo-area-img" />
        <h2>Superleads</h2>
      </div> */}
      <nav>

        <NavLink to="/admindashboard" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <BiHome size={25} />
          <span>Account</span>
        </NavLink>



        <NavLink to="/employeedashboard" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }>
          <BiHome size={25} />
          <span>Security</span>
        </NavLink>





        <NavLink to="/teams" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <LuUsers size={25} />
          <span>Notifications</span>
        </NavLink>

        <NavLink to="/boards" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <HiOutlineRectangleStack size={25} />
          <span>Pricing</span>
        </NavLink>

        <NavLink to="/employeeboards" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <HiOutlineRectangleStack size={25} />
          <span>Sales</span>
        </NavLink>


        <NavLink to="/register" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <FiUserPlus size={25} />
          <span>Users & Roles</span>
        </NavLink>

        <NavLink to="/timeline" className={({ isActive }) =>
          [
            "nav-link",
            isActive ? "active" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }  >
          <HiOutlineCalendar size={25} />
          <span>Backups</span>
        </NavLink>

      </nav>
    </div>
  )
}

export default SideNav;