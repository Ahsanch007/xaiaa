'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'



export const Header = () => {
    const pathname = usePathname();
    const menu = [
        {
            id: 1,
            name: 'Home',
            path: '/home',
            current: pathname === '/home' || pathname === '/'
        },
        {
            id: 2,
            name: 'Services and Conditions',
            path: '/services',
            current: pathname === '/services'
        },
        {
            id: 3,
            name: 'Terms of Trade',
            path: '/terms',
            current: pathname === '/terms'
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact',
            current: pathname === '/contact',
            subMenu: [
                {
                    id: 1,
                    name: 'Partners',
                    path: '/partners',
                    current: pathname === '/partners'
                }
            ]
        },
    ]
    const [submenuOpen, setSubmenuOpen] = useState(null);

    const handleMouseEnter = (itemId) => {
        setSubmenuOpen(itemId);
    };

    const handleMouseLeave = () => {
        setSubmenuOpen(null);
    };
    return (
        <header className='bg-[#dee4ec] w-full fixed z-10'>
            <div className="flex justify-between min-h-[72px]  px-[20px] items-center">
                <div className="title flex items-center mx-[20px]">
                    <Link href='/'>

                    <h1 className='text-[#323335] cursor-pointer roboto-regular font-normal leading-[1.6]'>
                        Xaia Costum Peptides
                    </h1>
                    </Link>

                </div>
                <div className="flex gap-3 items-center">
                    <div className="hidden md:block">
                        <ul className='flex p-0 m-0 list-none gap-3 items-center'>
                            {menu.map((item) => (
                                <li
                                    key={item.id}
                                    className='text-[#323335] relative roboto-regular cursor-pointer text-[16px] font-normal leading-[40px] p-[20px]'
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={item.path}
                                        className={`menu-list relative ${item.current ? 'active ' : ''}`}
                                    >
                                        <span>{item.name}</span>
                                    </Link>
                                    {item.subMenu && submenuOpen === item.id && (
                                        <ul className='submenu absolute left-0 bottom-[-30px] min-w-[200px] bg-[#fff] rounded-[5px] px-4 leading-[36px]'
                                            style={{
                                                boxShadow: '0 7px 11px 0 rgba(0,0,0,.2)'
                                            }}>
                                            {item.subMenu.map((subItem) => (
                                                <Link key={subItem.id} href={subItem.path}>
                                                    
                                                <li >{subItem.name}</li>
                                                </Link>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div>
                        <Link href='/contact' >

                            <button className='px-[30px] py-[10px] text-white bg-black rounded-[5px]'>
                                Xaia
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    )
}
