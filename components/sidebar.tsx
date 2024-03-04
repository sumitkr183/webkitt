import Link from "next/link";

import Menus from "./menus";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div>
          <Link href="/dashboard" className="sidebar-logo">
            <span>Webkitt</span>
          </Link>
          <small className="sidebar-logo-headline">A Social Web Solution</small>
        </div>
      </div>
      
      <Menus />
    </div>
  );
};

export default Sidebar;
