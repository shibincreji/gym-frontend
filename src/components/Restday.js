import React from 'react';
import VideoPlayer from 'react-video-js-player';
import video1 from "./layout/assests/Restday1.mp4";
import video2 from "./layout/assests/Restday2.mp4";



export default function Restday(){
 
  return(

    <div className="Restday"> 
   
     <h1 className="text-white bg-dark">Its Your Rest Day </h1>
    
    <h4 className="text-primary"> GRAB A CUP OF COFEE AND LET YOUR MUSCLES REST TODAY! </h4>
   
      
     <center> 
     
        <VideoPlayer src={video1}   width='980' height='550' className="border border-dark" autoplay/>
       <VideoPlayer src={video2}   width='980' height='550' className="border border-dark" autoplay/> 
        </center>
&nbsp;
    </div>
    
    
  )
}