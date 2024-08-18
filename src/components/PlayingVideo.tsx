import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchVideo } from "../redux/slices/Slice1";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

const PlayingVideo: React.FC = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchVideo(id));
	}, [dispatch, id]);

	const details = useAppSelector((state: RootState) => state.youTube.video);
	console.log("This is from useEffect", details[0]);

	const [showFullDescription, setShowFullDescription] = useState(false);

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	return (
		
		<div className="flex h-[500px] mt-24 mx-24">
			<div className="mt-10 w-[700px] ">
				
				<div>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						
						width="100%"
						controls
						style={{backgroundColor:"#000000"}}
						playing={true}
					/>
				</div>
				<div className="w-[700px]">
					<h3 className="text-2xl mt-2 font-bold">
						{details[0]?.snippet?.title}
					</h3>
					<br />
					<div className="flex">
						<div className="font-semibold ml-2  w-6">
							{details[0]?.snippet.channelTitle}
						</div>
						<button className="text-white bg-black font-semibold rounded-3xl h-9 w-24 ml-28">
							Subscribe
						</button>
						<div className="flex ml-20">
							<div className="px-4 w-[100px] h-10 rounded-l-3xl border-r pt-2 bg-slate-300 cursor-pointer flex">
								<div className="mt-1 mr-1">
									<AiOutlineLike />
								</div>
								{abbreviateNumber(details[0]?.statistics?.likeCount, 1)}
							</div>
							<div className="px-4 w-[55px] h-10 rounded-r-3xl bg-slate-300 pt-2 cursor-pointer">
								<div className="mt-2">
									<AiOutlineDislike />
								</div>
							</div>
						</div>
						<div>
							<div className="px-4 w-[100px] h-10 rounded-3xl bg-slate-300 flex ml-8 cursor-pointer">
								<span className="mt-3">
									<RiShareForwardLine />
								</span>
								<span className="mt-2 ml-2">Share</span>
							</div>
						</div>
					</div>

					<div className="bg-slate-100 mt-4 p-6 rounded-2xl border">
						<div className="flex">
                            <span className="flex-none font-semibold">{abbreviateNumber(details[0]?.statistics?.viewCount, 1)} views</span>
							<span className="font-semibold  ml-2">{new Date(details[0]?.snippet?.publishedAt).toLocaleDateString()}	</span>
							
						</div>
						<p
							className={`leading-7 mt-3 ${showFullDescription ? 'line-clamp-none' : 'line-clamp-3'}`}
							style={{ wordSpacing: '0.15rem' }}
						>
							{details[0]?.snippet?.description}
						</p>
						<button onClick={toggleDescription} className="text-blue-500 underline mt-2">
							{showFullDescription ? 'Show Less' : 'Show More'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayingVideo;
