import React, {useContext, useEffect} from 'react'


import { Context } from '../context/contextApi';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard'
export default function Feed() {

  const {loading , searchResults}= useContext(Context);

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
  },[])


  return <div className="flex flex-row h-[calc(100%-56px)]">
    <LeftNav></LeftNav>
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-400 scrollbar-track-black-100 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5  ">
        {!loading && searchResults && searchResults.map((item,index)=>{
          if(item.type!== "video") return false;
          return (<VideoCard key={index} video={item?.video}/>)
        })}
      </div>
    </div>
  </div>
}