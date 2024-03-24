import Link from "next/link";
import { FaCrown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import UserProfile from "@/components/auth/user-profile";

const Header = () => {
  return (
    <div className="header mb-4">
      <div className="header-left">
        <span
          className="burger-menu cursor-pointer"
          data-tooltip-id="collapse"
          data-tooltip-content="Collapse Sidebar"
        >
          <RxHamburgerMenu />
        </span>
      </div>
      <div className="header-right">
        <div className="dropdown-notification">
          <Link
            href="/upgrade"
            className="btn text-white btn-primary btn-sm rounded-40 social-shadow"
          >
            <FaCrown fill="#ffc928" /> Upgrade Plan
          </Link>
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

export default Header;
