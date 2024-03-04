import React from "react";
import { FiUsers, FiShoppingBag } from "react-icons/fi";
import { MdCreate } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineAccountTree, MdOutlineManageAccounts } from "react-icons/md";
import { VscSourceControl } from "react-icons/vsc";
import { BiHelpCircle } from "react-icons/bi";
import { TbHomeStats, TbReportAnalytics } from "react-icons/tb";
import { PiLineSegments } from "react-icons/pi";

const Icons: any = {
  FiUsers,
  MdCreate,
  GrView,
  GoProjectRoadmap,
  BiHelpCircle,
  MdOutlineAccountTree,
  MdOutlineManageAccounts,
  VscSourceControl,
  TbHomeStats,
  PiLineSegments,
  FiShoppingBag,
  TbReportAnalytics,
};

interface IconProps {
  icon: string;
  id: string;
}

const ExportIcons = ({icon, id}: IconProps) => {
  const IconComponent = Icons[icon];

  if (IconComponent) {
    return <IconComponent key={id} />;
  }

  return <div key={id}>Not Supported {icon} icon.</div>;
};

export default ExportIcons;
