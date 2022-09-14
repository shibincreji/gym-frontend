import React from 'react';
import VideoPlayer from 'react-video-js-player';
import VideoPlayer1 from 'react-video-js-player';
import {useHistory} from "react-router-dom";

import video1 from "./layout/assests/warmup/1-Neck-circles.mp4";
import video2 from "./layout/assests/warmup/2-Shoulder-Rotation.mp4";
import video3 from "./layout/assests/warmup/3-Arm-Circles.mp4";
import video4 from "./layout/assests/warmup/4-ElbowCircle.mp4";
import video5 from "./layout/assests/warmup/5-hiprotation.mp4";


export default function Warmup(){
  let history = useHistory();
 
  return(

    <div className="Warmup"> 
   
     <h2 className="text-white bg-dark">Its Time to Warmup your body </h2>
    
    
      
     <center> 
     &nbsp;
     
     <h2>1- Neck Circles </h2>
      <VideoPlayer src={video1}   width='980' height='550' className="border border-dark" />
       &nbsp;
       <h4  className="lead"> Duration 30 Seconds </h4>
       <h4 > 
         Standup and Straight your posture and Start rotating your neck in clockwise or Anticlockwise direction
       </h4>
       &nbsp;

       <h2>2- Shoulder Rotation </h2>
       <VideoPlayer1 src={video2}   width='980' height='550' className="border border-dark" /> 
       &nbsp;
       <h4 className="lead"> Duration 30 Seconds </h4>
       <h4 > Keep your Standing Position and this time Rotate your shoulder in Cloclwise direction</h4>
       &nbsp;
       <h2>3- Arm Circles </h2>
       <VideoPlayer src={video3}   width='980' height='550' className="border border-dark" /> 
       &nbsp;
       <h4 className="lead" > Duration 30 Seconds </h4>
       <h4  > Keep your Standing Position and Rotate your Arms in Cloclwise direction</h4>
       &nbsp;
       <h2>4- Elbow Circles </h2>
       <VideoPlayer1 src={video4}   width='980' height='550' className="border border-dark" /> 
       &nbsp;
       <h4  className="lead"> Duration 30 Seconds </h4>
       <h4> Keep your Standing Position and Rotate your Elbows in Circular direction</h4>
       &nbsp;
       <h2>5- Hip Rotation </h2>
       <VideoPlayer1 src={video5}   width='980' height='550' className="border border-dark" /> 
       &nbsp;
       <h4  className="lead"> Duration 30 Seconds </h4>
       <h4> Keep your Standing Position and Rotate your Uper Body along with Hips in Cloclwise direction</h4>

      &nbsp;
   <h1> </h1>
      <button  type="button" className="btn btn-success"  onClick={()=> { history.push("./welcomecustomer")}}>
          End Session
        </button>
      <p> </p>
        </center>

    </div>
    
    
  )
}