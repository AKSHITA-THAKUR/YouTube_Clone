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

interface SidebarProps {
	isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
	const navigate = useNavigate();
	const iconClass = "text-2xl";
	const Explore = [
		{ id: 1, name: "Trending", icon: <AiFillFire className={iconClass} /> },
		{
			id: 2,
			name: "Shopping",
			icon: <AiOutlineShopping className={iconClass} />,
		},
		{
			id: 3,
			name: "Music",
			icon: <IoMusicalNoteOutline className={iconClass} />,
		},
		{ id: 4, name: "Movies", icon: <PiFilmSlate className={iconClass} /> },
		{
			id: 5,
			name: "Gaming",
			icon: <IoGameControllerOutline className={iconClass} />,
		},
		{
			id: 6,
			name: "News",
			icon: <HiOutlineNewspaper className={iconClass} />,
		},
		{
			id: 7,
			name: "Podcasts",
			icon: <MdOutlinePodcasts className={iconClass} />,
		},
	];

	return isCollapsed ? (
		<div className="h-[calc(100vh-6.625rem)] mt-20 w-[60px]">
			<div className="px-9 h-full">
				<div className="flex flex-col items-center space-y-10">
					<div
						className="hover:bg-gray-200 p-2 rounded-full mt-6"
						onClick={() => navigate("/")}
					>
						<IoMdHome className={`cursor-pointer ${iconClass}`} />
					</div>
					<div className="hover:bg-gray-200 p-2 rounded-full">
						<SiYoutubeshorts
							className={`cursor-pointer ${iconClass}`}
						/>
					</div>
					<div className="hover:bg-gray-200 p-2 rounded-full">
						<MdOutlineSubscriptions
							className={`cursor-pointer ${iconClass}`}
						/>
					</div>
					<div className="hover:bg-gray-200 p-2 rounded-full">
						<GoDownload className={`cursor-pointer ${iconClass}`} />
					</div>
					<div className="hover:bg-gray-200 p-2 rounded-full">
						<LuHistory className={`cursor-pointer ${iconClass}`} />
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="relative h-[calc(100vh-6.625rem)] mt-24 w-[18%]">
			<div className="px-6 h-full overflow-y-hidden hover:overflow-y-scroll">
				<div className="space-y-2 ">
					<div
						className="flex items-center space-x-4 bg-gray-200 hover:bg-gray-300 rounded-xl p-2"
						onClick={() => navigate("/")}
					>
						<IoMdHome className={`cursor-pointer ${iconClass}`} />
						<span className="cursor-pointer">Home</span>
					</div>
					<div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
						<SiYoutubeshorts
							className={`cursor-pointer ${iconClass}`}
						/>
						<span className="cursor-pointer">Shorts</span>
					</div>
					<div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
						<MdOutlineSubscriptions
							className={`cursor-pointer ${iconClass}`}
						/>
						<span className="cursor-pointer">Subscriptions</span>
					</div>
					<hr />
					<h5 className="font-bold text-xl">You</h5>
					<div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
						<LuHistory className={`cursor-pointer ${iconClass}`} />
						<span className="cursor-pointer">History</span>
					</div>
					<div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
						<GrChannel className={`cursor-pointer ${iconClass}`} />
						<span className="cursor-pointer">Your Channel</span>
					</div>
					<div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
						<RiPlayList2Fill
							className={`cursor-pointer ${iconClass}`}
						/>
						<span className="cursor-pointer">Playlists</span>
					</div>
					<div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
						<MdOutlineWatchLater
							className={`cursor-pointer ${iconClass}`}
						/>
						<span className="cursor-pointer">Watch Later</span>
					</div>
					<div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
						<AiOutlineLike
							className={`cursor-pointer ${iconClass}`}
						/>
						<span className="cursor-pointer">Likes</span>
					</div>
					<div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
						<RiVideoLine
							className={`cursor-pointer ${iconClass}`}
						/>
						<span className="cursor-pointer">Your Videos</span>
					</div>
					<div className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2">
						<GoDownload className={`cursor-pointer ${iconClass}`} />
						<span className="cursor-pointer">Download</span>
					</div>
					<hr />
					<h5 className="font-bold text-xl">Explore</h5>
					<div className="space-y-2">
						{Explore.map((item) => (
							<div
								key={item.id}
								className="flex items-center space-x-4 hover:bg-gray-200 rounded-xl p-2"
							>
								<div className={`cursor-pointer ${iconClass}`}>
									{item.icon}
								</div>
								<span className="cursor-pointer">
									{item.name}
								</span>
							</div>
						))}
					</div>
					<hr />
					<span className="text-sm font-semibold text-gray-700">
						About Press Copyright <br />
						Contact us Creators <br />
						Advertise Developers <br />
						<br />
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
