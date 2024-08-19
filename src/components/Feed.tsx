import { useEffect , useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchMostPopular } from "../redux/slices/Slice1";
import { RootState } from "../redux/store";
import { abbreviateNumber } from "js-abbreviation-number";
import YouTube from "react-youtube";


const Feed: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [playingId , setPlayingId] = useState<string|null>(null);

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
		if (!videos || videos.length === 0) {
			return <p>No Videos found</p>;
		  }
		return videos.map((video: any) => {
			
			return (
				<div key={video.id} className="w-1/3 p-2 cursor-pointer"
				onMouseEnter={() => setPlayingId(video.id)}
				onMouseLeave={()=> setPlayingId(null)}
				>
					
					<div className="border rounded-lg shadow-lg bg-white h-full flex flex-col hover:bg-slate-300 duration-300 " 
					onClick={()=>{
						navigate(`/video/${video.id}`)
					}}>
						{
						playingId === video.id ?  (<YouTube 
							videoId={video.id}
							opts={{
								height: '250',
								width: '100%',
								playerVars: {
								  autoplay: 1,
								 
								},
							  }}
						/>) : (
							<img
							src={`http://img.youtube.com/vi/${video.id}/0.jpg`}
							alt={video.snippet.title}
							
						/>
						)
						}


						
						<div className="p-4 flex-grow ">
							<h3 className="text-md font-semibold">
								{truncateTitle(video.snippet.title, 10)}
							</h3>
							<div className="flex mt-2">
							<h4 className="text-md text-gray-900">{video.snippet.channelTitle}</h4>
  <h4 className="ml-3 text-gray-900">{abbreviateNumber(video.statistics?.viewCount, 1)} views</h4>
							</div>
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
