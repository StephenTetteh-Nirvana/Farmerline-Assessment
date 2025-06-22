import { LayoutDashboard, Search, Settings, ChevronUp, User2, LogOut } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const AppSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.clear()
    navigate("/login")
    toast("You logged out",{
     duration: 2000,
     position: "top-center",
     action: {
       label: "OK",
       onClick: () => console.log("Logged out"),
     },
    });
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* Image above the label */}
          <div className="flex justify-center py-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto rounded-[35%]"
            />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
            {items.map((item) => {
              const isActive = location.pathname === item.url; // returns true if the current route matches with the item url
            
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={isActive ? "bg-[#2666CF] text-white hover:bg-[#2666CF] hover:text-white":""}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer Section to display user and log out. */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> 
                  <div className="flex flex-col">
                    Admin
                    <span className="text-[11px] text-slate-500 truncate max-w-[120px]"
                    >
                      admin@farmerline.co
                    </span>
                  </div>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top">
                <Button className="hover:bg-red-600 hover:text-white cursor-pointer flex items-center 
                  gap-2 w-full"
                  onClick={()=>logOut()}
                >
                  <LogOut/>
                  Logout
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar;