import React, { useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import logo from "../assets/youTubeLogo-removebg-preview.png";
import PP from "../assets/PP.jpg"; // Default profile picture
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [query, setQuery] = useState<string>("");

  return (
    <div className="flex justify-between fixed top-0 w-full bg-white px-20 border py-3 z-10">
      <div className="flex">
        <button
          className="w-10 h-10 rounded-full flex items-center mt-2 justify-center hover:bg-gray-200"
          onClick={toggleSidebar}
        >
          <FiMenu size={20} />
        </button>
        <img
          className="w-[100px] ml-5 cursor-pointer"
          src={logo}
          alt="YouTube Logo"
        />
      </div>
      <div className="w-[550px] h-[45px] flex mt-2">
        <div className="w-full px-3 py-2 rounded-l-full border">
          <input
            type="text"
            placeholder="Search here"
            className="outline-none w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          className="rounded-r-full px-3 bg-gray-100 hover:bg-slate-300"
          onClick={() => {
            navigate(`/search/${query}`);
          }}
        >
          <IoSearchOutline size={20} />
        </button>
        <div className="ml-4 mt-1">
          <button className="bg-gray-100 hover:bg-slate-300 p-2 rounded-full flex items-center justify-center">
            <MdKeyboardVoice size={22} />
          </button>
        </div>
      </div>
      <div className="w-[200px] mt-1">
        <div className="mt-2 flex justify-evenly">
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-300">
            <AiOutlineVideoCameraAdd size={20} />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-300">
            <IoMdNotificationsOutline size={20} />
          </button>
          <div
            className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer flex items-center justify-center"
            onClick={isAuthenticated ? () => logout({ logoutParams: { returnTo: window.location.origin } }) : () => loginWithRedirect()}
          >
            <img
              src={isAuthenticated && user?.picture ? user.picture : PP}
              className="rounded-full w-full h-full object-cover"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
