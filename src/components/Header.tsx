import React from "react";
import { useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import logo from "../assets/youTubeLogo-removebg-preview.png";
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header:React.FC = () => {
	const navigate = useNavigate();
	const [query , setQuery] = useState<string>("");
	const[hide , setHide] = useState<boolean>(false);
	return (
		<div className=" flex justify-between fixed top-0 w-[100%] bg-white px-20 border py-3 z-10 ">
			<div className=" flex">
      <button className="w-[40px] h-[40px] rounded-3xl mt-2  hover:bg-gray-200 pl-3 " 
	  onClick={()=>{
		setHide(!hide)
		console.log("set toggle to " , hide)
	  }}
	  >
					<FiMenu />
					</button>
				<img
					className="w-[100px] ml-5 cursor-pointer"
					src={logo}
					alt="YouTube Logo"
				/>
			</div>
			<div className="w-[550px] h-[45px] flex  mt-2">
				<div className="w-full px-3 py-2 rounded-l-full border">
					<input
          
						type="text"
						placeholder="Search here"
						className="outline-none w-full  "
						value={query}
						onChange={(e) => setQuery(e.target.value)}
			     />
				</div>
				<button className="rounded-r-full  px-3 bg-gray-100 hover:bg-slate-300"
				onClick={()=>{
					navigate(`/search/${query}`)
				}}
				>
					<IoSearchOutline />
					
				</button>
				<div className="ml-4">
					<button className="bg-gray-100  hover:bg-slate-300 p-3 mb-[4px] rounded-full ">
						<MdKeyboardVoice />
					</button>
				</div>
			</div>
			<div className="  w-[200px] ">
				<div className="mt-2 flex justify-evenly ">
					<button className="w-[40px] h-[40px] rounded-3xl bg-gray-50 hover:bg-gray-300   pl-3">
						<AiOutlineVideoCameraAdd />
					</button>
					<button className="w-[40px] h-[40px] rounded-3xl  bg-gray-50 hover:bg-gray-300 pl-3 ">
						<IoMdNotificationsOutline />
					</button>
					<div className="bg-gray-300 w-[40px] h-[40px] rounded-3xl text-center"></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
