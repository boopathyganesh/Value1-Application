"use client"
import React from 'react'
import { BiBell } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { selectActiveLinkTitle } from '@/store/selectors/activeLinkSelector';
import { sitemap } from '@/lib/map';
import { usePathname } from 'next/navigation';

const AppNavbar = () => {
    const path = usePathname();
    let activeItem = sitemap.find(item => item.link === path);
    return (
        <nav className='w-full h-12 flex items-center justify-center text-white'>
            <div className='w-full flex flex-col items-center justify-center gap-4'>
                <h2 className="ml-10 text-3xl font-bold w-full text-center">{activeItem?.title}</h2>
            </div>
            <div className='w-1/6 flex items-center justify-center gap-5'>
                <button className='px-5 py-3 rounded-2xl bg-gold-200'>Upgrade</button>
                <button className='px-3 py-3 rounded-2xl bg-gold-200 flex items-center justify-center'>
                    <BiBell className='text-2xl' />
                </button>
            </div>
        </nav>
    )
}

export default AppNavbar
