'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const menu = [
    {
        id: 1,
        name: 'Home',
        path: '/home',
        current:'/home'
    },
    {
        id: 2,
        name: 'Services and Conditions',
        path: '/services',
        current:'/services'
    },
    {
        id: 3,
        name: 'Terms of Trade',
        path: '',
        current:false
    },
    {
        id: 4,
        name: 'Contact',
        path: '',
        current:false,
        subMenu: [
            {
                id: 1,
                name: 'Partners'
            }
        ]
    },
]

export const Header = () => {
  const pathname = usePathname();
  const menu = [
    {
        id: 1,
        name: 'Home',
        path: '/home',
        current: pathname === '/home'
    },
    {
        id: 2,
        name: 'Services and Conditions',
        path: '/services',
        current:pathname ==='/services'
    },
    {
        id: 3,
        name: 'Terms of Trade',
        path: '',
        current:pathname === false
    },
    {
        id: 4,
        name: 'Contact',
        path: '',
        current:pathname === false,
        subMenu: [
            {
                id: 1,
                name: 'Partners'
            }
        ]
    },
]
    return (
        <header className='bg-[#dee4ec] w-full fixed z-10'>
            <div className="flex justify-between min-h-[72px]  px-[20px] items-center">
                <div className="title flex items-center mx-[20px]">
                    <h1 className='text-[#323335] roboto-regular font-normal leading-[1.6]'>
                        Xaia Costum Peptides
                    </h1>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="hidden md:block">
                        <ul className='flex p-0 m-0 list-none gap-3 items-center'>
                            {menu.map((item) =>
                                <>
                                    <li className='text-[#323335] roboto-regular cursor-pointer text-[16px] font-normal leading-[40px] p-[20px]  '>
                                <Link href={item.path} className={`menu-list relative ${item.current ? 'active ' :''}  `}>
                                    <span >

                                        {item.name}
                                    </span>
                                </Link>
                                </li>
                                </>


                            )}

                        </ul>
                    </div>
                    <div>

                        <button className='px-[30px] py-[10px] text-white bg-black rounded-[5px]'>
                            Xaia
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
