'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import MultiMenu from "./ui/multi-menu";
import MiniLogo from "@/public/images/mini-logo.png"
import Logo from "@/public/images/logo-big.png"
import Image from "next/image";
//import menu from "@/lib/menu";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import User from "@/public/images/coown_abassdor.png";

interface MenuItem {
    id: number;
    title: string;
    link: string;
    icon: string;
    subList?: {
        title: string;
        link: string;
        icon: string;
    }[];
}

interface SideBarProps {
    menu: MenuItem[]
}

const Sidebar = ({ menu }: SideBarProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    function handleBtnClick(link: string) {
        router.push(link)
    }


    return (
        <div className="relative w-max hidden lg:flex">
            {/* Sidebar Toggle */}
            <button className={`flex absolute top-20 -right-3 rounded-full bg-white p-1.5 text-center smooth ${isSidebarOpen ? 'rotate-180 animate-pulse' : ''} `} onClick={toggleMenu}>
                <FaAngleRight className="text-gold-500 text-md" />
            </button>
            <div className={`flex flex-col items-center justify-between py-8 gap-2 w-max h-screen  overflow-hidden filter bg-inherit smooth ${isSidebarOpen ? 'max-w-52' : 'max-w-24'}`}>
                {/* Logo */}
                <div className={`${isSidebarOpen ? 'w-32' : 'w-16'}`}>
                    {!isSidebarOpen && (
                        <Link href={"/"}><Image src={MiniLogo} alt={"Mini Brand Logo"} width={500} /></Link>
                    )}
                    {isSidebarOpen && (
                        <Link href={"/"}><Image src={Logo} alt={"Brand Logo"} width={800} /></Link>
                    )}
                </div>

                {/* Sidebar */}
                <div className="flex flex-col py-2 h-[600px] items-center justify-center overflow-hidden">
                    <ul className="flex flex-col items-center justify-between gap-2 overflow-y-scroll no-scroll">
                        {menu.map((item) => (
                            <React.Fragment key={item.id}>
                                {!item.subList && (
                                    <li className={`flex items-center justify-center smooth w-52 group`}>
                                        <button onClick={() => handleBtnClick(item.link)} className={`flex items-center justify-between gap-4 py-2 px-3 ${isSidebarOpen ? 'w-full' : 'max-w-20'} ${pathname === item.link ? "bg-gold-300 text-white" : "bg-[#303136] text-gold-300"} rounded-2xl group-hover:bg-[#242529] smooth`}>
                                            {isSidebarOpen && (<div className="text-left text-lg font-semibold">{item.title}</div>)}
                                            <div className={`p-2 group-hover:bg-white ${pathname === item.link ? "bg-white" : "bg-white/40"} rounded-xl smooth`}>
                                                <Image src={item.icon} alt={item.title} height={20} width={20} className="text-xl text-gold-500" />
                                            </div>
                                        </button>
                                    </li>
                                )}
                                {item.subList && (
                                    <li className={`flex items-center justify-center ${isSidebarOpen ? 'w-52' : 'w-max'} group`}>
                                        <MultiMenu sidebarSts={isSidebarOpen} Icon={item.icon} parentBtn={item.title} child={item.subList} activeLink={pathname} />
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                {/* Profile Section */}
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <div className={`flex items-center p-2 h-max bg-inherit rounded-2xl text-white overflow-hidden ${isSidebarOpen ? 'w-48' : 'w-max'}`}>
                            <div className="w-20 h-auto">
                                <Image src={User} alt={"User Image"} />
                            </div>
                            <span className={` flex-col items-center justify-center mt-2 ${isSidebarOpen ? 'flex' : 'hidden'}`}>
                                <span className="font-semibold">Username</span>
                                <span className="text-gold-200 font-medium">Role</span>
                            </span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" side="right">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>


    )
}

export default Sidebar
