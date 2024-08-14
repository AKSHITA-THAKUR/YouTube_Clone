import React from 'react'
import { useEffect } from 'react';
import { useAppDispatch , useAppSelector } from '../redux/hooks';
import { fetchVideo } from '../redux/slices/Slice1';
import { useParams } from 'react-router-dom'
import { RootState } from '../redux/store';

const PlayingVideo:React.FC = () => {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  useEffect(()=>{
    dispatch(fetchVideo(id));
  },[dispatch])
  const details = useAppSelector((state:RootState)=> state.youTube.video)
  console.log("This is from useEffect",details)
  return (
    <div>
      <h1>Youtube video Playing</h1>
    </div>
  )
}

export default PlayingVideo
