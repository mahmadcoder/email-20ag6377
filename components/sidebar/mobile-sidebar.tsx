"use client";

import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar/sidebar";

const MobileSidebar = () => {
    return (

        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon"
                        className="md:hidden">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 bg-[#111827]">
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </div>


    );
}

export default MobileSidebar;