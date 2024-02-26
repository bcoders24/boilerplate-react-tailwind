import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="h-full w-full flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
export default Layout;
