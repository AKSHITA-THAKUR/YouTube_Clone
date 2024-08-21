// src/components/Categories.tsx
import React, { useEffect } from "react";
import { fetchCategories } from "../redux/slices/Slice1";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import Feed from "./Feed";

interface CategoryProp {
	isCollapsed: boolean;
}

const Categories: React.FC<CategoryProp> = ({ isCollapsed }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	const result = useAppSelector((state: RootState) => state.youTube.category);
	const status = useAppSelector((state: RootState) => state.youTube.status);
	const renderTitle = () => {
		if (!result || result.length === 0) {
			return <p>No Categories found</p>;
		}
		return result.map((Titles: any) => (
			<div
				key={Titles.id}
				className=" flex-none  border w-[200px] bg-gray-200 hover:bg-gray-300 duration-300 rounded-2xl font-medium text-gray-700 cursor-pointer flex-nowrap py-1 text-center"
			>
				{Titles.snippet.title}
			</div>
		));
	};

	return (
		<div
			className={`ml-3 flex-1 mt-24 ${
				isCollapsed ? "w-[calc(100%-60px)]" : "w-[calc(100%-18%)]"
			}`}
		>
			<div
				className={`flex flex-1 overflow-x-scroll no-scrollbar space-x-2 mb-2  ${
					isCollapsed ? "" : "w-[1080px]"
				} `}
			>
				{status === "loading" ? (
					<p className="text-center w-full">Loading...</p>
				) : (
					renderTitle()
				)}
			</div>
			<div>
				<Feed />
			</div>
		</div>
	);
};

export default Categories;
