import { ArrowRight, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react";
import {
  Card,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function DashboardPage() {

  const navigate = useNavigate()
  const tools = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      to: "/conversation",
    },
    {
      label: "Music Generation",
      icon: MusicIcon,
      color: "text-emerald-700",
      bgColor: "text-emerald-700/10",
      to: "/music",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "text-pink-700/10",
      to: "/image",
    },
    {
      to: "/video",
      icon: VideoIcon,
      label: "Video Generation",
      color: "text-orange-700",
      bgColor:'text-orange-700/10'
    },
  
    {
      to: "/code",
      icon: CodeIcon,
      label: "Code Generation",
      color: "text-green-700",
      bgColor: "text-green-700/10",
    },

  ];
  return (

    <Dashboard>
    <div className=" m-8 space-y-4">
      <h2 className=" text-2xl md:text-3xl font-bold text-center">
        Explore the power of AI
      </h2>
      <p className=" text-muted-foreground font-light text-sm md:text-lg text-center">
        Chat with the smartest AI - Experience the power of AI
      </p>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool, index) => (
          <Card
          onClick={()=>{
            navigate(tool.to)
          }}
            key={index}
            className=" p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className=" flex items-center gap-x-4">
              <div className={`p-2 w-fit rounded-sm `}>
                <tool.icon className={`${tool.color} w-8 h-8`}></tool.icon>
              </div>
              <div className=" font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className=" w-5 h-5"/> 
          </Card>
        ))}
      </div>
    </div>
    </Dashboard>

  );
}

export default DashboardPage;
