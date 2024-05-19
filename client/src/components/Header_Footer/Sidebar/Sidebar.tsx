

// sidebar  -----------------------------------

import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 md:w-72">
        <SidebarMenu />
      </div>
    </div>
  );
}


export default Sidebar;
