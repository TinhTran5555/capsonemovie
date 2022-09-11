import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return ( <div className="container">
    <div className="p-4 bg-opacity-40 bg-white text-black ">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink  to="/"
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
            alt="Cybershop.edu.vn"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink to="/"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2" activeClassName="border-b-2"
            >
              lịch Chiếu
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/contact"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 "activeClassName="border-b-2"
            >
              Liên Hệ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/news"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 "activeClassName="border-b-2"
            >
              Tin Tức
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/contact"a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 "activeClassName="border-b-2"
            >
              Ứng Dụng
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">Đăng Ký</button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Đăng Nhập
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;