import React from 'react';

const Navbar = () => {
    return (
        <div>
            

<div className="border-b-2">
        <div className="max-w-[1350px] mx-auto">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow"
                >
                  <li>
                    <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                      Download
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                      + New Ticket
                    </a>
                  </li>
                </ul>
              </div>
              <a className="btn-ghost font-bold text-xl">
                CS — Ticket System
              </a>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1 ">
                <li>
                  <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                    Changelog
                  </a>
                </li>
                <li>
                  <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                    Download
                  </a>
                </li>
                <li>
                  <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="hover:text-white hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]">
                    + New Ticket
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Navbar;