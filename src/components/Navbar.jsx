'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoSunnySharp } from "react-icons/io5";
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';



  const links=<>

  <NavLink href={'/'}><li>Home</li></NavLink>
  <NavLink href={'/rooms'}><li>Rooms</li></NavLink>
  </>

  const authLinks=<>
  <li><Link href={'/login'} className='btn btn-active bg-[#da9e38] text-[#1e1711] text-base rounded-xl border-none'>Login</Link></li>
  <li><Link href={'/register'} className='btn btn-active bg-[#da9e38] rounded-xl text-base shadow-none text-[#1e1711] border-none'>Register</Link></li>
  </>
const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
 
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className='bgColor2 sticky top-0 z-50 bg-transparent'>
     <div className="navbar  text-gray-50 max-w-6xl mx-auto shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    
     {
      user ? <>
       {links}
      <NavLink href={'/add-room'}><li>Add Room</li></NavLink>
  <NavLink href={'/my-listings'}><li>My Listings</li></NavLink>
  <NavLink href={'/my-bookings'}><li>My Bookings</li></NavLink>
      </> : <> {links}</>
     }
      </ul>
    </div>
    <div className='flex justify-between items-center'>
    <Image 
    src={'/assets/logo.png'}
    alt='logo'
    height={65}
    width={65}
    >
    </Image>
    <div className="flex-1">

    <Link href={'/'} className=" text-xl font-extrabold"><span className='text-[#da9e38]'>Focus</span>Room </Link>
  </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-4 px-1">

      {
    user ? <>
       {links}
      <NavLink href={'/add-room'}><li>Add Room</li></NavLink>
  <NavLink href={'/my-listings'}><li>My Listings</li></NavLink>
  <NavLink href={'/my-bookings'}><li>My Bookings</li></NavLink>
      </> : <> {links}</>
     }
    </ul>
  </div>
  <div className="navbar-end ">
   <div className="flex items-center gap-4">
    <a className='text-[#da9e38] text-2xl'><IoSunnySharp /></a>
 {
  user ? (
    <div className='flex justify-between items-center gap-2'>

    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        {
          user?.image ? (
            <div className="w-12 rounded-full overflow-hidden">
              <Image
                src={user?.image}
                alt="user"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
          ) : (
            <div className="avatar placeholder">
              <div className="bg-neutral text-white w-12 rounded-full">
                <span>{user.name.charAt(0)}</span>
              </div>
            </div>
          )
        }
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#1e1711] rounded-box z-[1] mt-3 w-52 p-2 shadow-lg shadow-yellow-500"
      >
        <li>
          <a>Profile</a>
        </li>

        <li>
          <a>Settings</a>
        </li>

        <li>
          <button onClick={handleSignOut}>Logout</button>
        </li>
      </ul>
    </div>
     <div className='text-white'>
                {user?.name}
              </div>
    </div>
  ) : (
    <ul className="menu menu-horizontal text-lg space-x-4 px-1">
      {authLinks}
    </ul>
  )
}
  </div>

  </div>
</div>
    </div>
  );
};

export default Navbar;



//  <div className="flex gap-2">
//     <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    
//   </div>

{/* <div className="dropdown dropdown-end">
    
       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>

<ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
 