import { LucideIcon } from "lucide-react"

interface HeadingProp {
    title:String;
    description:String;
    icon:LucideIcon;
    iconColor?:String;
    bgColor?:String;
}
function Heading({
    title,
    description,
    icon,
    iconColor,
    bgColor
}:HeadingProp) {
  return (
    <div>Heading</div>
  )
}

export default Heading