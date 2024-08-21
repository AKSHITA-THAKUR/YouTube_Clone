import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { fetchSearchResult } from "../redux/slices/Slice1";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { formatDistanceToNow } from "date-fns";

interface HomepageProp {
	SidebarCollapsed: boolean;
}

const SearchList: React.FC<HomepageProp> = ({ SidebarCollapsed }) => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

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

		return queryResult.map((video: any) => {
			const publishTime = new Date(video?.snippet?.publishTime);
			const timeAgo = formatDistanceToNow(publishTime, {
				addSuffix: true,
			});

			return (
				<div className="" key={video?.id?.videoId}>
					<div className="flex mb-4">
						<img
							src={`http://img.youtube.com/vi/${video?.id?.videoId}/0.jpg`}
							alt={video?.snippet?.title}
							className="w-[400px] h-[228px] object-cover rounded-lg mr-4"
						/>
						<div className="w-[700px] h-[228px]   ml-2">
							<h3 className="text-lg font-semibold ">
								{video?.snippet?.title}
							</h3>
							<div className="flex text-slate-800 text-sm">
								<p className="font-semibold">{timeAgo}</p>
								<h4 className="ml-3">
									{video?.snippet?.channelTitle}
								</h4>
							</div>
							<p className="text-sm mt-2 line-clamp-2">
								{video?.snippet?.description}
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
