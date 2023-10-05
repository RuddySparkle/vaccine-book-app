'use client'
import { VideoPlayer } from "@/Components/VideoPlayer";
import { useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export function PromoteCard(){

    const [playing, setPlaying] = useState(true);

    useWindowListener("contextmenu", (e) => {
        e.preventDefault();
    });

    return(
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg
        bg-gray-200 flex flex-row">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
            <div className="m-5 text-26">
                Get your vaccine today.
                <button className='bg-white text-cyan-600 border border-cyan-600
                    font-semibold p-[10px] my-5 rounded-lg z-20 flex
                    hover:bg-cyan-600 hover:text-white hover:border-transparent'
                    onClick={() => setPlaying(!playing)}>   
                    {playing ? 'Pause' : 'Play'}               
                </button>
            </div>
        </div>
    );
}