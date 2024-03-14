import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function Layout() {
  return (
    <div className="h-screen  w-full flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col">
        <Chat/>
      </div>
    </div>
  );
}
export default Layout;
