import React from "react";
import { Metadata } from "next";

import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Dashboard | Webkitt"
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Header />
        <div className="content-body">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
