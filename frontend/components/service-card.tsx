import { Cloud, BarChart, Settings, ClipboardList, Users, Shield, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function ServiceCard({ title, description, icon, color }: ServiceCardProps) {
  const getIcon = (): JSX.Element => {
    const iconProps = { className: "h-8 w-8 text-white" }

    switch (icon) {
      case "cloud":
        return <Cloud {...iconProps} />
      case "bar-chart":
        return <BarChart {...iconProps} />
      case "settings":
        return <Settings {...iconProps} />
      case "clipboard-list":
        return <ClipboardList {...iconProps} />
      case "users":
        return <Users {...iconProps} />
      case "shield":
        return <Shield {...iconProps} />
      default:
        return <Cloud {...iconProps} />
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 h-full">
      <div className="p-6 flex flex-col h-full">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", color)}>{getIcon()}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a href="#" className="text-sm font-medium inline-flex items-center text-orange-600 hover:text-orange-700">
            Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
