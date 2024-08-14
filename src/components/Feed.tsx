import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchMostPopular } from "../redux/slices/Slice1";
import { RootState } from "../redux/store";

const Feed: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchMostPopular());
	}, [dispatch]);

	const videos = useAppSelector((state: RootState) => state.youTube.data);
	console.log("The videos are", videos);

	const truncateTitle = (title: string, wordLimit: number) => {
		const words = title.split(" ");
		if (words.length > wordLimit) {
			return words.slice(0, wordLimit).join(" ") + "...";
		}
		return title;
	};

	const showVideos = () => {
		return videos.map((video: any) => {
			return (
				<div key={video.id} className="w-1/3 p-2 cursor-pointer ">
					<div className="border rounded-lg shadow-lg bg-white h-full flex flex-col " 
					onClick={()=>{
						navigate(`/video/${video.id}`)
					}}>
						<img
							src={`http://img.youtube.com/vi/${video.id}/0.jpg`}
							alt={video.snippet.title}
							
						/>
						<div className="p-4 flex-grow hover:bg-slate-300 duration-300">
							<h3 className="text-md font-semibold">
								{truncateTitle(video.snippet.title, 10)}
							</h3>
							<h4 className="text-md text-gray-600">{video.snippet.channelTitle}</h4>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div>
			<div className="h-[500px] flex flex-wrap overflow-y-scroll no-scrollbar">
				{showVideos()}
			</div>
		</div>
	);
};

export default Feed;
