"use client";

import React from 'react'
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FileText, LayoutDashboard, MessageSquare, UsersRound } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import SidebarSearch from './sidebar-search';

const montserrat = Montserrat({ weight: "500", subsets: ["latin"] });

const dashRoutes = [
    {
        label: "Google SERP",
        icon: LayoutDashboard,
        href: "/dashboard"
    },
    {
        label: "Email Scrape",
        icon: UsersRound,
        href: "/emailscrape",
    },
    {
        label: "Email Automation",
        icon: MessageSquare,
        href: "/emailauto",
    },
    {
        label: "Reports",
        icon: FileText,
        href: "/reports",
    }
]
const Sidebar = () => {
    const pathname = usePathname();


    return (
        <div className="space-y-4 py-4 flex flex-col h-full bd-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14 ">
                    {/* .........logo img............ */}
                    <div className="relative w-12 h-6 mr-2">
                        <Image
                            alt="Logo"
                            src="/assets/images/logo.svg" width={124} height={68} />
                    </div>
                    {/* ............. */}
                    <div>
                        <h1 className={cn("text-2xl", montserrat.className)}>
                            Email Dragon
                        </h1>
                    </div>
                </Link>

                {/* ..........selection for tools buttons................ */}

                <div className="space-y-1 p-2.5	">

                    <div className='min-[767px]:hidden'>
                        <SidebarSearch />
                    </div>
                    
                    {dashRoutes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className=
                            {cn("text-lg group flex p-3 px-3 w-full justify-start  font-medium cursor-pointer hover:text-white  hover:bg-white/10 rounded-full transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}>
                            <div className="flex items-center felx-1">
                                <route.icon className={cn("h-5 w-5 mr-3")} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Sidebar
