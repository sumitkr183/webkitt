"use client";

import { useState } from "react";
import clsx from "clsx";
import { useDetectClickOutside } from "react-detect-click-outside";

import Avatar from "@/components/ui/avatar";
import DropDownMenu from "./user-dropdown-menu";

const UserProfile = () => {
  const ref = useDetectClickOutside({ onTriggered: () => setShowMenu(false) });

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      ref={ref}
      className={`dropdown dropdown-loggeduser ${showMenu ? "show" : ""}`}
      onClick={() => setShowMenu(!showMenu)}
    >
      <span className="dropdown-link cursor-pointer" data-toggle="dropdown">
        <Avatar />
      </span>

      <div
        className={clsx(
          "dropdown-menu dropdown-menu-right",
          showMenu && "show"
        )}
      >
        <DropDownMenu />
      </div>
    </div>
  );
};

export default UserProfile;
