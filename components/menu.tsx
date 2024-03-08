"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useDetectClickOutside } from "react-detect-click-outside";
import Link from "next/link";
import clsx from "clsx";

import ExportIcon from "./ui/export-icon";
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
  const role = getUserRole();

  const [showMenu, setShowMenu] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(()=> setIsClient(true), [])

  if(!isClient) return null
  if(!accessRole.includes(role)) return null

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
            <MenuItem key={index} {...item} role={role} />
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
  role: number;
}

const MenuItem = ({ name, link, accessRole, role }: IMenuItemProps) => {
  if (!accessRole.includes(role)) return null;
  return (
    <>
      <Link href={link} className="nav-sub-link">
        {name}
      </Link>
    </>
  );
};
