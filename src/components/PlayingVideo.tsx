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
import { useNavigate } from "react-router-dom";

const PlayingVideo: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			dispatch(fetchVideo(id));
		}
	}, [dispatch, id]);

	const {
		video: details = [],
		data: videos = [],
		status,
	} = useAppSelector((state: RootState) => state.youTube);

	const videoDetails = details.length > 0 ? details[0] : {};

	const {
		snippet: {
			title = "",
			channelTitle = "",
			description = "",
			publishedAt = "",
		} = {},
		statistics: { likeCount = 0, viewCount = 0 } = {},
	} = videoDetails;

	const [showFullDescription, setShowFullDescription] = useState(false);
	const [like, setLike] = useState<boolean>(false);
	const [disLike, setDislike] = useState<boolean>(false);

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	return (
		<div className="flex flex-col md:flex-row mt-24 mx-4 md:mx-10 lg:mx-10 gap-8">
			{/* Video Player Section */}
			<div className="w-full md:w-[60%] lg:w-[65%]">
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
						{title}
					</h3>
					<br />
					<div className="flex items-center mt-4 justify-between">
						<div className="flex items-center">
							<div className="font-semibold ml-2 text-sm md:text-base lg:text-lg">
								{channelTitle}
							</div>
							<button className="text-white bg-black font-semibold rounded-3xl h-9 w-24 ml-4">
								Subscribe
							</button>
						</div>
						<div className="flex items-center">
							<div
								className="flex items-center px-4 w-[100px] h-10 rounded-l-3xl border-r pt-2 bg-slate-300 cursor-pointer"
								onClick={() => {
									setLike(!like);
									setDislike(false);
								}}
							>
								<div className="mr-1 mb-2">
									{like ? <BiSolidLike /> : <AiOutlineLike />}
								</div>
								<span className="text-sm mb-2 lg:text-base">
									{abbreviateNumber(likeCount, 1)}
								</span>
							</div>
							<div
								className="flex items-center px-4 w-[55px] h-10 rounded-r-3xl bg-slate-300 pt-2 cursor-pointer"
								onClick={() => {
									setDislike(!disLike);
									setLike(false);
								}}
							>
								<div className="mb-1">
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
								{abbreviateNumber(viewCount, 1)} views
							</span>
							<span className="font-semibold">
								{new Date(publishedAt).toLocaleDateString()}
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
							{description}
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

			{/* Popular Videos Section */}
			<div className="w-full md:w-[35%] lg:w-[30%] ">
				<h2 className="text-xl font-bold mb-4">Popular Videos</h2>
				<div className="space-y-4 max-h-[calc(100vh-1rem)] overflow-y-auto">
					{status === "loading" ? (
						<p>Loading popular videos...</p>
					) : (
						videos.map((video) => {
							const {
								id,
								snippet: { title, thumbnails },
							} = video;
							const thumbnailUrl = thumbnails?.medium?.url;

							return (
								<div
									key={id}
									className="flex items-center  mt-1 h-28 w-auto rounded-lg p-2 hover:bg-gray-100 cursor-pointer"
									onClick={() => {
										navigate(`/video/${id}`);
									}}
								>
									<img
										src={thumbnailUrl}
										alt={title}
										className="w-32 h-24 object-cover rounded-md"
									/>
									<div className="ml-3">
										<p className="text-md font-semibold">
											{title}
										</p>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};

export default PlayingVideo;
