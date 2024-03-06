import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col">{children}</div>
    </div>
  );
}
export default Layout;
