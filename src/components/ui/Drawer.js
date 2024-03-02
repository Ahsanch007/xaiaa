import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Drawer = () => {
    const pathname = usePathname();

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false); // New state for submenu

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const toggleSubMenu = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

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
    ];

    return (
        <div>
            <div className="text-center">
                <Image src='/assets/images/menu.png' onClick={toggleDrawer} height={24} width={24} alt='' />
            </div>

            <div
                id="drawer-navigation"
                className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? '' : 'translate-x-full'
                    } bg-[#dee4ec] w-full dark:bg-[#dee4ec]`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
            >
                <div className="p-2">
                    <div className="flex flex-col ">
                        <div className="flex justify-between">
                            <Link href='/'>
                                <h1 className='text-[#323335] cursor-pointer roboto-regular font-normal leading-[1.6]'>
                                    Xaia Costum Peptides
                                </h1>
                            </Link>
                            <Image src='/assets/images/arrow.png' onClick={() => {
                                setDrawerOpen(false);
                                setSubMenuOpen(false); // Close submenu when drawer closes
                            }} height={24} width={24} alt='' />
                        </div>

                        <div className='pt-[40px] pb-[60px]'>
                            <ul className='flex flex-col p-0 m-0 list-none gap-3  '>
                                {menu.map((item) => (
                                    <li
                                        key={item.id}
                                        className='text-[#323335] relative roboto-regular cursor-pointer text-[16px] font-normal leading-[40px] py-[10px]'
                                    >
                                        {item.subMenu ? (
                                            <>
                                                <span className='w-full flex justify-between items-center' onClick={toggleSubMenu}>{item.name}
                                                <Image src='/assets/images/down (1).png' height={16} width={16} alt='Arrow Down' /></span>
                                                {isSubMenuOpen && (
                                                    <ul className="submenu absolute">
                                                        {item.subMenu.map((subItem) => (
                                                            <li key={subItem.id}>
                                                                <Link href={subItem.path} className={subItem.current ? 'active' : ''}>
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.path}
                                                className={`menu-list relative ${item.current ? 'active ' : ''}`}
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className=" flex items-center justify-center">
                            <Link href='/contact'>
                                <button className='px-[30px] py-[10px] text-white bg-black rounded-[5px]'>
                                    Xaia
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
