import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiFillTag } from 'react-icons/ai';
import { TbHeart, TbHelp, TbTruckDelivery, TbWallet } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { BsFillSaveFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
function Navbar() {

    const [nav, setNav] = useState(false);
    const close = () => {
        console.log(nav);
        setNav(!nav);
        console.log(nav);
    }
    const iconSize = window.innerWidth >= 640 ? 30 : 19;
    return (
        <div className='max-w-[1340px] m-auto flex items-center justify-between px-2 py-2'>
            {/* left side */}
            <div className='flex items-center'>
                <div>
                    <AiOutlineMenu size={iconSize} className='mr-2 cursor-pointer' onClick={close} />
                </div>
                <h1 className=' mr-2 text-[1rem] sm:text-2xl'>Best
                    <span className='font-semibold'> Eats</span>
                </h1>
                <div className='justify-center bg-gray-200 rounded-xl hidden md:flex'>
                    <div className='bg-black text-white rounded-xl px-2 py-1'>Deliever</div>
                    <div className='px-2 py-1 mb-1'>Pickup</div>
                </div>
            </div>
            {/* search bar */}
            <div className='h-[2.2rem] sm:h-auto mt-2 max-w-[5] flex bg-gray-200 border border-b-gray-200 rounded-xl px-[5px] py-[2px] w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={30} />
                <input type="text" className='bg-gray-200 focus:outline-none px-[2px] placeholder:text-xl' placeholder='search here' />
            </div>
            {/* cart */}
            <div className='mt-2 flex items-center bg-black text-white rounded-xl px-2 py-[5px] cursor-pointer'>
                <AiOutlineShoppingCart size={iconSize} className='mr-1' />
                <p className='text-[13px] sm:text-[1rem]'>Cart</p>

            </div>

            {/* overlay */}
            {
                nav ? <div className='bg-black/80 fixed w-full h-screen top-0 left-0'></div> : ""
            }
            {/* hamburger-menu */}
            <div className={nav ? 'w-[300px] p-3 bg-white h-screen fixed top-0 left-0 z-10  translate-x-0 duration-300' : 'w-[300px] p-3  h-screen fixed top-0  z-10  translate-x-[-30rem] duration-300'}>
                <div className='flex justify-between'>
                    <h1 className='text-2xl'>Best
                        <span className='font-bold'> Eats</span>
                    </h1>
                    <AiOutlineClose size={25} className='mt-1.5 cursor-pointer' onClick={close} />
                </div>
                <ul className='mt-8'>
                    <li className='flex  mt-5 cursor-pointer'>
                        <TbTruckDelivery size={25} className='mr-2' />Orders
                    </li>
                    <li className='flex  mt-5 cursor-pointer'>
                        <MdFavorite size={25} className='mr-2' />Favorites
                    </li>
                    <li className='flex  mt-5 cursor-pointer'>
                        <TbWallet size={25} className='mr-2' />Wallet
                    </li>
                    <li className='flex  mt-5 cursor-pointer'>
                        <MdHelp size={25} className='mr-2' />Help
                    </li>
                    <li className='flex  mt-5 cursor-pointer'>
                        <AiFillTag size={25} className='mr-2' />Promotions
                    </li>
                    <li className='flex  mt-5 cursor-pointer'>
                        <BsFillSaveFill size={25} className='mr-2' />Best Ones
                    </li>
                    <li className='flex  mt-5 cursor-pointer'>
                        <FaUserFriends size={25} className='mr-2' />Invite Friends
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar