'use client'
import { useState } from "react"
import Link from "next/link"
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import MultiMenu from "./ui/multi-menu";
import MiniLogo from "@/public/images/mini-logo.png"
import Logo from "@/public/images/logo-big.png"
import Image from "next/image";
import menu from "@/lib/menu";
//import { User } from "@nextui-org/user";
import React from "react";
import { useRouter } from "next/navigation";
import User from "@/public/images/mr.dummy.png";


const Sidebar = () => {
    const router = useRouter();
    const rewardSubMenu = [
        { name: 'Reward List 1', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
        { name: 'Reward List 2', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
        { name: 'Reward List 3', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
        { name: 'Reward List 4', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
        { name: 'Reward List 5', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
    ]
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    function handleBtnClick(link:string){
        router.push(link)
    }

    return (
        <div className="relative w-max hidden lg:flex">
            {/* Sidebar Toggle */}
            <button className={`flex absolute top-32 -right-3 rounded-full bg-white p-1.5 text-center smooth ${isSidebarOpen ? 'rotate-180 animate-pulse' : ''} `} onClick={toggleMenu}>
                <FaAngleRight className="text-gold-500 text-md" />
            </button>
            <div className={`flex flex-col items-center justify-start gap-8 w-max h-[750px] 2xl:h-[800px] overflow-hidden p-4 filter bg-inherit smooth ${isSidebarOpen ? 'max-w-64' : 'max-w-24'}`}>
                {/* Logo */}
                <div className={`${isSidebarOpen ? 'w-32' : 'w-16'}`}>
                    {!isSidebarOpen && (
                        <Image src={MiniLogo} alt={"Mini Brand Logo"} width={500} />
                    )}
                    {isSidebarOpen && (
                        <Image src={Logo} alt={"Brand Logo"} width={800} />
                    )}
                </div>
                {/* Profile Section */}
                <div className={`flex flex-col items-center p-2 h-52 bg-inherit rounded-2xl text-white overflow-hidden ${isSidebarOpen ? 'w-52' : 'w-max'}`}>
                    {/* <User
                        name="UserName"
                        description="CoOwn"
                        isFocusable
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                        }}
                        classNames={{
                            base: `flex flex-col items-center justify-center w-full ${isSidebarOpen ? 'gap-2 sidebar-user' : 'gap-0'}`,
                            name: `${isSidebarOpen ? 'visible' : 'hidden'} font-bold text-md text-wrap `,
                            wrapper: `${isSidebarOpen ? 'w-full' : ''} break-all items-center justify-center gap-1`,
                            description: `${isSidebarOpen ? 'visible' : 'hidden'} text-white text-md text-gold-200 font-medium`,
                        }
                        }
                    /> */}
                        <div className="w-20 h-auto">
                            <Image src={User} alt={"User Image"} />
                        </div>
                        <span className="flex flex-col items-center justify-center mt-2">
                            <span className="font-semibold">Username</span>
                            <span className="text-gold-200 font-medium">Role</span>
                        </span>
                </div>
                {/* Sidebar */}
                <div className="flex flex-col py-2 h-[600px] items-center justify-start overflow-hidden">
                    <ul className="flex flex-col items-center justify-between gap-2 overflow-y-scroll no-scroll">
                        {menu.map((item, index) => (
                            <React.Fragment key={index}>
                                {!item.subList && (
                                    <li key={index} className={`flex items-center justify-center smooth w-52 group`}>
                                        <button onClick={()=>handleBtnClick(item.link)} className={`flex items-center justify-between gap-4 py-2 px-3 ${isSidebarOpen ? 'w-full' : 'max-w-20'} bg-[#303136] rounded-2xl group-hover:bg-[#242529] smooth`}>
                                            {isSidebarOpen && (<div className="text-left text-lg font-semibold text-gold-300">{item.title}</div>)}
                                            <div className="p-2 bg-white/40 group-hover:bg-white rounded-xl smooth">
                                                {<item.icon className="text-xl text-gold-500" />}
                                            </div>
                                        </button>
                                        {/* 
                                        <Link href={item.link} className={`flex items-center justify-between gap-4 py-2 px-3 ${isSidebarOpen ? 'w-full' : 'max-w-20'} bg-[#303136] rounded-2xl group-hover:bg-[#242529] smooth`}>
                                            {isSidebarOpen && (<div className="text-lg font-semibold text-gold-300">{item.title}</div>)}
                                            <div className="p-2 bg-white/40 group-hover:bg-white rounded-xl smooth">
                                                {<item.icon className="text-xl text-gold-500" />}
                                            </div>
                                        </Link> 
                                        */}
                                    </li>
                                )}
                                {item.subList && (
                                    <li key={index} className={`flex items-center justify-center ${isSidebarOpen ? 'w-52' : 'w-max'} group`}>
                                        <MultiMenu sidebarSts={isSidebarOpen} Icon={<item.icon className="text-xl text-gold-500" />} parentBtn={item.title} child={item.subList} />
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Sidebar
