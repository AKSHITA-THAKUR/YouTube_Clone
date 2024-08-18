import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { GrChannel } from "react-icons/gr";
import { RiVideoLine } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdOutlinePodcasts } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const Explore = [
        {
            id: 1,
            name: "Trending",
            icon: <AiFillFire />
        },
        {
            id: 2,
            name: "Shopping",
            icon: <AiOutlineShopping />
        },
        {
            id: 3,
            name: "Music",
            icon: <IoMusicalNoteOutline />
        },
        {
            id: 4,
            name: "Movies",
            icon: <PiFilmSlate />
        },
        {
            id: 5,
            name: "Gaming",
            icon: <IoGameControllerOutline />
        },
        {
            id: 6,
            name: "News",
            icon: <HiOutlineNewspaper />
        },
        {
            id: 7,
            name: "Podcasts",
            icon: <MdOutlinePodcasts />
        }
    ];

    return (
        <div className="relative h-[calc(100vh-6.625rem)] mt-24 w-[18%]">
            <div className="px-6  h-full overflow-y-hidden hover:overflow-y-scroll ">
                <div className="space-y-2">
                    <div className="flex items-center space-x-4 bg-gray-200 hover:bg-gray-300 rounded-xl p-2"
                    onClick={()=>{
                        navigate("/")
                    }}>
                        <IoMdHome className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">Home</span>
                    </div>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                        <SiYoutubeshorts className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">Shorts</span>
                    </div>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                        <MdOutlineSubscriptions className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">Subscriptions</span>
                    </div>
                    <hr />
                    <h5 className="font-bold text-xl">You</h5>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                        <LuHistory className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">History</span>
                    </div>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                        <GrChannel className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">Your Channel</span>
                    </div>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                        <RiPlayList2Fill className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">Playlists</span>
                    </div>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                        <MdOutlineWatchLater className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">Watch Later</span>
                    </div>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                        <AiOutlineLike className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">Likes</span>
                    </div>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                        <RiVideoLine className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">Your Videos</span>
                    </div>
                    <div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                        <GoDownload className="text-xl cursor-pointer" />
                        <span className="cursor-pointer">Download</span>
                    </div>
                    <hr />
                    <h5 className="font-bold text-xl">Explore</h5>
                    <div className="space-y-2">
                        {Explore.map((item) => {
                            return (
                                <div key={item.id} className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
                                    <div className="text-xl cursor-pointer">{item.icon}</div>
                                    <span className="cursor-pointer">{item.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    <hr />
                    <span className="text-sm font-semibold text-gray-700">
                        About Press Copyright <br />
                        Contact us Creators <br />
                        Advertise Developers <br /> <br />
                        <p>
                            Terms Privacy Policy & Safety <br />
                            How YouTube works <br />
                            Test new features
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
