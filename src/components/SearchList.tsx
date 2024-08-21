import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { fetchSearchResult } from "../redux/slices/Slice1";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";

interface HomepageProp {
	SidebarCollapsed: boolean;
}
interface VideoId {
	videoId: string;
}
interface Snippet {
	title: string;
	channelTitle: string;
	description: string;
	publishTime: Date;
}
interface video {
	id: VideoId;
	snippet: Snippet;
}
const SearchList: React.FC<HomepageProp> = ({ SidebarCollapsed }) => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { searchResult: queryResult } = useAppSelector(
		(state: RootState) => state.filter
	);
	useEffect(() => {
		if (queryResult.length) return;
		dispatch(fetchSearchResult(id));
	}, [id]);
	console.log(queryResult);
	const display = () => {
		if (!queryResult || queryResult.length === 0) {
			return <p>No results found</p>;
		}

		return queryResult.map((video: video) => {
			const {
				id: { videoId },
				snippet: { title, channelTitle, description, publishTime },
			} = video;
			const publishedTime = new Date(publishTime);
			const timeAgo = formatDistanceToNow(publishedTime, {
				addSuffix: true,
			});

			return (
				<div className="" key={videoId}>
					<div
						className="flex mb-4 cursor-pointer"
						onClick={() => {
							navigate(`/video/${videoId}`);
						}}
					>
						<img
							src={`http://img.youtube.com/vi/${videoId}/0.jpg`}
							alt={title}
							className="w-[400px] h-[228px] object-cover rounded-lg mr-4"
						/>
						<div className="w-[700px] h-[228px]   ml-2">
							<h3 className="text-lg font-semibold ">
								{video?.snippet?.title}
							</h3>
							<div className="flex text-slate-800 text-sm">
								<p className="font-semibold">{timeAgo}</p>
								<h4 className="ml-3">{channelTitle}</h4>
							</div>
							<p className="text-sm mt-2 line-clamp-2">
								{description}
							</p>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div className="flex">
			<Sidebar isCollapsed={SidebarCollapsed} />
			<div className="ml-5 mt-20 w-full h-[500px] overflow-y-auto">
				<div className="grid grid-cols-1 gap-4 h-full mt-4">
					{display()}
				</div>
			</div>
		</div>
	);
};

export default SearchList;
