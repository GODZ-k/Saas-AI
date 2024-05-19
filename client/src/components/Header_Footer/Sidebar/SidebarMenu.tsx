import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";



function SidebarMenu() {
    const routes = [
      {
        to: "/dashboard",
        image: LayoutDashboard,
        label: "Dashboard",
        color: "text-sky-500",
      },
      {
        to: "/conversation",
        image: MessageSquare,
        label: "Conversation",
        color: "text-violet-500",
      },
      {
        to: "/image",
        image: ImageIcon,
        label: "Image Generation",
        color: "text-pink-700",
      },
      {
        to: "/video",
        image: VideoIcon,
        label: "Video Generation",
        color: "text-orange-700",
      },
      {
        to: "/music",
        image: MusicIcon,
        label: "Music Generation",
        color: "text-emerald-700",
      },
      {
        to: "/code",
        image: CodeIcon,
        label: "Code Generation",
        color: "text-green-700",
      },
      {
        to: "/settings",
        image: Settings,
        label: "Settings",
        color: "",
      },
    ];
    return (
      <div className=" space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1">
          <Link to="/" className="flex items-center pl-3 mb-14">
            <div className=" relative w-16 h-16 mr-4">
              <img src="logo.png" alt="Logo" />
            </div>
            <h1 className=" text-2xl font-bold">AI</h1>
          </Link>
          <div className=" space-y-1">
            {routes.map((route,index) => (
              <NavLink
                key={index}
                to={route.to}
                className={({isActive})=> ` ${isActive ? 'text-white bg-white/10' : ' text-zinc-400'} text-sm group flex p-3 w-full
                justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition`}
              >
                <div className="flex items-center flex-1">
                 <route.image className={`${route.color} mr-3 h-5 w-5`}>
                 </route.image>
                 {route.label}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default SidebarMenu