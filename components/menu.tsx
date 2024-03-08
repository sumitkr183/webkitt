"use client";

import React, { useState } from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useDetectClickOutside } from "react-detect-click-outside";
import Link from "next/link";
import clsx from "clsx";

import ExportIcon from "./ui/export-icon";
import { decryptData } from "@/lib/encrypt";
import { getCookie } from "cookies-next";
import { getUserRole } from "@/lib/utility";

interface IMenu {
  _uid: string;
  name: string;
  hasChild: boolean;
  icon: string;
  targetSegment: string;
  link: string;
  accessRole: number[];
}

interface IMenuProps extends IMenu {
  child: IMenu[];
}

const Menu = ({
  _uid,
  accessRole,
  child,
  hasChild,
  icon,
  link,
  name,
  targetSegment,
}: IMenuProps) => {
  const router = useRouter();
  const activeSegment = useSelectedLayoutSegment();
  const ref = useDetectClickOutside({ onTriggered: () => setShowMenu(false) });

  const [showMenu, setShowMenu] = useState(false);

  return (
    <li
      ref={ref}
      className={clsx("nav-item cursor-pointer mb-1", showMenu && "show")}
      {...(hasChild
        ? { onClick: () => setShowMenu(!showMenu) }
        : { onClick: () => router.push(link) })}
    >
      <span
        className={clsx(
          "nav-link with-sub",
          !hasChild && "hide-arrow",
          activeSegment === targetSegment && "active"
        )}
      >
        <ExportIcon icon={icon} id={_uid} /> {name}
      </span>
      {hasChild && (
        <nav className="nav nav-sub">
          {child.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </nav>
      )}
    </li>
  );
};

export default Menu;

interface IMenuItemProps {
  name: string;
  link: string;
  accessRole: number[];
}

const MenuItem = ({ name, link }: IMenuItemProps) => {
  return (
    <>
      <Link href={link} className="nav-sub-link">
        {name}
      </Link>
    </>
  );
};
