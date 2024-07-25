import React, { Fragment, useState } from "react";
import { Menu, MenuItems, Transition,MenuItem } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { MenuButton } from "@headlessui/react";
import { users } from "../utils/data";
import { useSelector,useDispatch } from "react-redux";
import {Logout} from "../redux/userSlice.js"

function MenuList({user,onClick}) {

  const dispatch = useDispatch();
  const handleLogout = () => {
      dispatch(Logout());
      window.location.replace("/");
  };

  return (
    <div>
      <Menu as="div" className="inline-block text-left">
        <div className="flex">
          <MenuButton className="inline-flex gap-2 w-full rounded-md bg-white md:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-opacity-20">
            <div className="leading[80px] flex flex-col items-start">
              <p className="text-sm font-semibold ">
                {user?.firstName ?? user?.name}
              </p>
              <span className="text-sm text-blue-600 ">
                {user?.jobTitle ?? user?.email}
              </span>
            </div>

            <img
              src={user?.profileUrl}
              alt='user profile'
              className='w-10 h-10 rounded-full object-cover '
            />
            <BiChevronDown
              className='h-8 w-8 text-slate-600'
              aria-hidden='true'
            />
          </MenuButton>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <MenuItems className='absolute z-50 right-2 mt-2 w-56 origin-top-right divide-y dividfe-gray-100 rounded-md bg-white shadow-lg focus:outline-none '>
          <div className="p-1">
            <MenuItem>
              {
                ({focus}) => (
                  <Link 
                  to={`${
                  user?.accountType ? "user-profile/_id" : "company-profile"}`}
                  className={`${focus ? "bg-blue-500 text-white" : "text-gray-900" } group flex w-full items-center rounded-md p-2 text-sm`}
                  onClick={onClick}
                  >
                    <CgProfile
                      className={`${
                        focus ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5  `}
                      aria-hidden='true'
                    />
                     {user?.accountType ? "User Profile" : "Company Profile"}
                  </Link>
                )
              }
            </MenuItem>
            
            <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={() => handleLogout()}
                    className={`${
                      focus ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <AiOutlineLogout
                      className={`${
                        focus ? "text-white" : "text-gray-600"
                      } mr-2 h-5 w-5  `}
                      aria-hidden='true'
                    />
                    Log Out
                  </button>
                )}
              </MenuItem>

          </div>
          </MenuItems>
        </Transition>


      </Menu>
    </div>
  );
}

function Navbar() {
  const { user } = useSelector((state) => state.user);
  
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative bg-[#ebeeee] z-50">
        <nav className="container mx-auto flex items-center justify-between p-5">
          <div>
            <Link
              to="/"
              className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent"
              title="Home"
            >
              Job
              <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
                ify
              </span>
            </Link>
          </div>

          <ul className="hidden lg:flex gap-10 text-base">
            <li>
              <Link to="/">Find Job</Link>
            </li>
            <li>
              <Link to="/company">Companies</Link>
            </li>
            <li>
            <Link
            onClick={handleCloseNavbar}
            to={
              user?.accountType === "seeker" ? "apply-history" : "upload-job"
            }
          >
            {user?.accountType === "seeker" ? "Applications" : "Upload Job"}
          </Link>
          </li>
          <li>
          <Link to="/about-us" onClick={handleCloseNavbar}>
            About
          </Link>
          </li>
          
          </ul>


          <div className="hidden lg:block">
          {/*BASED on the user loggedIn two ways: */}
            {!user?.token ? (
              // 1st way
              <Link to="/">
                <CustomButton
                  title="Sign In"
                  containerStyles="text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600 transition-all duration-500 hover:scale-110 "
                />
              </Link>
            ) : (
              //2nd way to show profile
              <div>
                <MenuList user={user} />
              </div>
            )}
          </div>

          <button
            className="block lg:hidden text-slate-900"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`${
            isOpen ? "absolute flex bg-[#f7fdfd] " : "hidden"
          } container mx-auto lg:hidden flex-col pl-8 gap-3 py-5`}
        >
          <Link to="/" onClick={handleCloseNavbar}>
            Find Job
          </Link>
          <Link to="/company" onClick={handleCloseNavbar}>
            Companies
          </Link>
          <Link
            onClick={handleCloseNavbar}
            to={
              user?.accountType === "seeker" ? "apply-history" : "upload-job"
            }
          >
            {user?.accountType === "seeker" ? "Applications" : "Upload Job"}
          </Link>
          <Link to="/about-us" onClick={handleCloseNavbar}>
            About
          </Link>

          <div className="w-full py-10">
            {!user?.token ? (
              <Link to="/" >
                <CustomButton
                  title="Sign In"
                  containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
                />
              </Link>
            ) : (
              <div>
                <MenuList user={user} onClick={handleCloseNavbar} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
