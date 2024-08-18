import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { fetchSearchResult } from '../redux/slices/Slice1';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useParams } from 'react-router-dom';
import { abbreviateNumber } from 'js-abbreviation-number';
import { RootState } from '../redux/store';
import { formatDistanceToNow } from 'date-fns';

const SearchList: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSearchResult(id));
  }, [ id]);

  const queryResult = useAppSelector((state: RootState) => state.filter.searchResult);

  const display = () => {
    if (!queryResult || queryResult.length === 0) {
      return <p>No results found</p>;
    }

    return queryResult.map((video: any) => {
      // Format the publish time
      const publishTime = new Date(video?.snippet?.publishTime);
      const timeAgo = formatDistanceToNow(publishTime, { addSuffix: true });

      return (
        <div className='border' key={video?.id?.videoId}>
        <div  className="flex mb-4">
          <img
            src={`http://img.youtube.com/vi/${video?.id?.videoId}/0.jpg`}
            alt={video?.snippet?.title}
            className="w-[400px] h-[228px] object-cover rounded-lg mr-4"
          />
          <div className="w-[700px] h-[228px] ml-4 border ml-2" >
            <h3 className="text-lg font-semibold mt-5 ">{video?.snippet?.title}</h3>
            <div className='flex text-slate-800 text-sm'>
              <p className="ml-2">{timeAgo}</p>
              <h4 className="ml-3">{video?.snippet?.channelTitle}</h4>
            </div>
            <p className="text-sm mt-2 line-clamp-2">{video?.snippet?.description}</p>
          </div>
        </div>
        </div>
      );
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-16 mt-20 w-full h-[500px] overflow-y-auto">
        <div className="grid grid-cols-1 gap-4 h-full mt-4">
          {display()}
        </div>
      </div>
    </div>
  );
};

export default SearchList;
