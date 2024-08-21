import { useEffect, useState } from "react";
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
	const [playingId, setPlayingId] = useState<string | null>(null);

	const { data: videos, status } = useAppSelector(
		(state: RootState) => state.youTube
	);

	useEffect(() => {
		if (videos.length) return;
		dispatch(fetchMostPopular());
	}, [dispatch]);

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
			const {
				id,
				snippet: { title, channelTitle },
				statistics: { viewCount },
			} = video;

			return (
				<div
					key={id}
					className="w-full sm:w-1/2 lg:w-1/3 p-2 cursor-pointer"
					onMouseEnter={() => setPlayingId(id)}
					onMouseLeave={() => setPlayingId(null)}
				>
					<div
						className="border rounded-lg shadow-lg bg-white h-full flex flex-col hover:bg-slate-300 duration-300"
						onClick={() => {
							navigate(`/video/${id}`);
						}}
					>
						{playingId === id ? (
							<YouTube
								videoId={id}
								opts={{
									height: "250",
									width: "100%",
									playerVars: {
										autoplay: 1,
									},
								}}
							/>
						) : (
							<img
								src={`http://img.youtube.com/vi/${id}/0.jpg`}
								alt={title}
							/>
						)}

						<div className="p-4 flex-grow">
							<h3 className="text-md font-semibold">
								{truncateTitle(title, 10)}
							</h3>
							<div className="flex mt-2">
								<h4 className="text-md text-gray-900">
									{channelTitle}
								</h4>
								<h4 className="ml-3 text-gray-900">
									{abbreviateNumber(viewCount, 1)} views
								</h4>
							</div>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div>
			<div className="h-[460px] flex flex-wrap overflow-y-scroll no-scrollbar">
				{status === "loading" ? (
					<p className="text-center w-full">Loading...</p>
				) : (
					showVideos()
				)}
			</div>
		</div>
	);
};

export default Feed;
