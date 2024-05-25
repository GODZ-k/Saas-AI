import { LucideIcon } from "lucide-react";

interface HeadingProp {
  title: String;
  description: String;
  icon: LucideIcon;
  iconColor?: String;
  bgColor?: String;
}
function Heading({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProp) {
  return (
      <div className="px-4 lg-px-8 flex items-center gap-x-3 mb-8">
        <div className={`${bgColor} p-2 w-fit rounded-md`}>
          <Icon className={`${iconColor} w-10 h-10`}></Icon>
        </div>
        <div>
          <h2 className=" text-3xl font-bold">
            {title}
          </h2>
          <p className="tex-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

  );
}

export default Heading;
