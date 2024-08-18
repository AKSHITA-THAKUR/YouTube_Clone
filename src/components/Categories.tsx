// src/components/Categories.tsx
import React, { useEffect } from "react";
import { fetchCategories } from "../redux/slices/Slice1";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import Feed from "./Feed";
const Categories: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	const result = useAppSelector((state: RootState) => state.youTube.category);

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
		<div className="ml-4">
			<div className=" flex-1 mt-24 w-[1060px]">
				<div className="flex flex-1  overflow-x-scroll no-scrollbar space-x-2 ">
					{renderTitle()}
				</div>
				<div >
					<Feed />
				</div>
			</div>
		</div>
	);
};

export default Categories;
