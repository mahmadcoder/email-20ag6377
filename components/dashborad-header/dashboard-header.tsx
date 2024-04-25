'use client';

import { UserButton, useClerk } from '@clerk/nextjs';
import React from 'react';
import "./dashboard-head.css"
import { Bell, Command, Search } from 'lucide-react';
import MobileSidebar from '../sidebar/mobile-sidebar';
import SidebarSearch from '../sidebar/sidebar-search';


const DashboardHeader = () => {
    const { user } = useClerk();
    return (
        <div className='navbar flex items-center p-5 border-b'>
            <MobileSidebar />
            <div className="flex w-full justify-start">
                <div className='flex items-center '>
                    <UserButton afterSignOutUrl="/" />
                </div>
                <div className='px-3'>
                    {user ? (
                        <span className="text-sm flex flex-col">Hello, {user.fullName} <span>Welcome back</span></span>
                    ) : (
                        <span className="text-sm">Welcome Guest</span>
                    )}
                </div>
            </div>

            <div className='max-[767px]:hidden'>
            <SidebarSearch />
            </div>

            {/* <div className="relative">
                <input
                    className="p-2.5 pl-10 pr-8 border 
                    border-none 
                    text-black-300
                    rounded-full 
                    focus:outline-none 
                    focus:none
                    placeholder-black
                    bg-slate-50	"
                    placeholder="Search"
                />
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <Search className="text-black-300" />
                </div>
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                    <Command className="text-black-300" />
                </div>
            </div> */}

            <div className=''>
                <button className='p-2 border rounded-full mx-5  hover:bg-slate-50'>
                    <Bell />
                </button>
            </div>

        </div>
    )
}

export default DashboardHeader
