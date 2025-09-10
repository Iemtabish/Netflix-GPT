import React from 'react'
import { Play, PlayIcon, CirclePlay , PlayCircle} from 'lucide-react';
const VideoTitle= ({title,overview}) =>{

  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>

        <div className="">
            <button className='bg-gray-500 text-white p-3 px-10 text-lg bg-opacity-50 rounded-lg '> 
            <div className='flex items-center gap-2'>
       <Play fill="currentColor" stroke="none" color="red" />
                Play
            </div>
                  </button>
            <button className='mx-2 bg-gray-500 text-white p-3 px-10 text-lg bg-opacity-50 rounded-lg'>More Info</button>

        </div>
    </div>

  )
};

export default VideoTitle;