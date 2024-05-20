import React, { useState } from 'react'
import { BeakerIcon, BookOpenIcon, SquaresPlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    let Links = [
        { name: "Convert", link: "/" },
        { name: "Download", link: "/" },
        { name: "Remove Bg", link: "/" },

    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-cyan-500 py-4 md:px-10 px-7'>
                {/* logo section */ }
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>

                    <span>Badass</span>
                </div>
                {/* Menu icon */ }
                <div onClick={ () => setOpen(!open) } className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <SquaresPlusIcon />
                    }
                </div>
                {/* linke items */ }
                <ul className={ `md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-cyan-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}` }>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <a href={ link.link } className='text-gray-700 hover:text-black duration-500'>{ link.name }</a>
                            </li>))
                    }

                </ul>
                {/* button */ }
            </div>
        </div>)
}

export default Navbar
