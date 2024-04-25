import React from 'react'
import { Command, Search } from 'lucide-react';


const SidebarSearch = () => {
    return (
        <div>
            <div className="relative">
                <input
                    className="p-2.5 pl-10 pr-8 border 
                    border-none 
                    text-black-300
                    rounded-full 
                    focus:outline-none 
                    focus:none
                    placeholder-black
                    bg-slate-50	
                    "
                    placeholder="Search"
                />
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <Search className="text-black-300" />
                </div>
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                    <Command className="text-black-300" />
                </div>
            </div>
        </div>
    )
}

export default SidebarSearch;
