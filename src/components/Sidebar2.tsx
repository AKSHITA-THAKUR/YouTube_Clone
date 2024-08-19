import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { LuHistory } from "react-icons/lu";

const Sidebar2: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[calc(100vh-6.625rem)] mt-20 w-[60px]">
            <div className="px-9 h-full bg-slate-400">
                
                    <div className="flex flex-col items-center space-y-10">
                        <div className="p-1  hover:bg-gray-200 p-3 rounded-full mt-6"
                            onClick={() => {
                                navigate("/");
                            }}>
                            <IoMdHome className="cursor-pointer" />
                        </div>
                        <div className="p-1 hover:bg-gray-200 p-3 rounded-full">
                            <SiYoutubeshorts className="cursor-pointer" />
                        </div>
                        <div className="p-1 hover:bg-gray-200 p-3 rounded-full">
                            <MdOutlineSubscriptions className="cursor-pointer" />
                        </div>
                        <div className="p-1 hover:bg-gray-200 p-3 rounded-full">
                        <GoDownload className="text-xl cursor-pointer" />
                    </div>
                    <div className="p-1 hover:bg-gray-200  p-3 rounded-full">
                        <LuHistory className="text-xl cursor-pointer" />
                    </div>
                    </div>
                
              
            </div>
        </div>
    );
};

export default Sidebar2;
