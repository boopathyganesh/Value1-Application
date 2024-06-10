import React from 'react'
import { BiBell } from "react-icons/bi";

const AppNavbar = () => {
    return (
        <nav className='w-full h-12 flex items-center justify-between text-white'>
            <div className='flex flex-col items-start justify-center gap-4'>
                <h2 className="ml-10 text-3xl font-bold">Dummy Me</h2>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <button className='px-5 py-3 rounded-2xl bg-gold-200'>Upgrade</button>
                <button className='px-3 py-3 rounded-2xl bg-gold-200 flex items-center justify-center'>
                    <BiBell className='text-2xl' />
                </button>
            </div>
        </nav>
    )
}

export default AppNavbar
