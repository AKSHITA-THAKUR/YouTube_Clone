import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchVideo } from "../redux/slices/Slice1";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
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
	const [like, setLike] = useState<boolean>(false);
	const [disLike, setDislike] = useState<boolean>(false);
	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	return (
		<div className="flex flex-col items-center mt-24 mx-4 md:flex-row md:justify-start md:mx-10 lg:mx-10">
			<div className="w-full ml-10 md:w-[80%] lg:w-[700px]">
				<div className="w-full">
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						width="100%"
						controls
						style={{ backgroundColor: "#000000" }}
						playing={true}
					/>
				</div>
				<div className="w-full mt-4">
					<h3 className="text-lg md:text-xl lg:text-2xl font-bold">
						{details[0]?.snippet?.title}
					</h3>
					<br />
					<div className="flex items-center mt-4 justify-between">
						<div className="flex items-center">
							<div className="font-semibold ml-2 text-sm md:text-base lg:text-lg">
								{details[0]?.snippet.channelTitle}
							</div>
							<button className="text-white bg-black font-semibold rounded-3xl h-9 w-24 ml-4">
								Subscribe
							</button>
						</div>
						<div className="flex items-center">
							<div
								className="flex items-center px-4 w-[100px] h-10 rounded-l-3xl border-r pt-2 bg-slate-300 cursor-pointer"
								onClick={() => setLike(!like)}
							>
								<div className="mt-1 mr-1">
									{like ? <BiSolidLike /> : <AiOutlineLike />}
								</div>
								<span className="text-sm lg:text-base">
									{abbreviateNumber(
										details[0]?.statistics?.likeCount,
										1
									)}
								</span>
							</div>
							<div
								className="flex items-center px-4 w-[55px] h-10 rounded-r-3xl bg-slate-300 pt-2 cursor-pointer"
								onClick={() => setDislike(!disLike)}
							>
								<div className="mt-2">
									{disLike ? (
										<BiSolidDislike />
									) : (
										<AiOutlineDislike />
									)}
								</div>
							</div>
							<div className="ml-4">
								<div className="px-4 w-[100px] h-10 rounded-3xl bg-slate-300 flex items-center cursor-pointer">
									<RiShareForwardLine className="mr-2" />
									<span className="text-sm lg:text-base">
										Share
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-slate-100 mt-4 p-4 md:p-6 rounded-2xl border">
						<div className="flex justify-between">
							<span className="flex-none font-semibold">
								{abbreviateNumber(
									details[0]?.statistics?.viewCount,
									1
								)}{" "}
								views
							</span>
							<span className="font-semibold">
								{new Date(
									details[0]?.snippet?.publishedAt
								).toLocaleDateString()}
							</span>
						</div>
						<p
							className={`leading-7 mt-3 ${
								showFullDescription
									? "line-clamp-none"
									: "line-clamp-3"
							}`}
							style={{ wordSpacing: "0.15rem" }}
						>
							{details[0]?.snippet?.description}
						</p>
						<button
							onClick={toggleDescription}
							className="text-blue-500 underline mt-2"
						>
							{showFullDescription ? "Show Less" : "Show More"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayingVideo;
