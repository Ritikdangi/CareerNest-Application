import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function VersionSwitcher({ defaultVersion }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-[#fe6019]/10 data-[state=open]:text-[#fe6019]"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 border border-[#fe6019]/30 rounded-md p-1 overflow-hidden bg-white">
              {/* Use the existing education-related icon (previous AlumnLink icon) */}
              <img src="/icon.png" alt="CareerNest education icon" className="w-8 h-8 object-cover" />
            </div>

            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold text-[#fe6019]">CareerNest</span>
              <span className="text-[#fe6019]/80 text-xs">{defaultVersion}</span>
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
