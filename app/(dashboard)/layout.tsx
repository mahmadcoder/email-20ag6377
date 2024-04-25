import DashboardHeader from '@/components/dashborad-header/dashboard-header';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/sidebar/sidebar';
import { UserButton } from '@clerk/nextjs';
import React from 'react'

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='h-full realtive'>

            <div className=" hidden h-full 
            md:flex md:w-72 
            md:flex-col md:fixed 
            md:inset-y-0 z-[80] bg-gray-800">
                <Sidebar />
            </div>

            <main className="md:pl-72">
                <DashboardHeader />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout
