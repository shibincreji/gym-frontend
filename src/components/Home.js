import React from 'react';
import VideoPlayer from 'react-video-js-player';
import VideoPlayer1 from 'react-video-js-player';
import video1 from "./layout/assests/test.mp4";
import video2 from "./layout/assests/home1.mp4";
import video3 from "./layout/assests/home2.mp4";

export default function Home(){
 
  return(

    <div> 
   
     <h1 className="text-white bg-dark">Welcome to GYM Trainer 2021</h1>
     &nbsp;
    <center>
    <h3 > Regular exercise and physical activity promotes strong muscles and  
    </h3> <h3>bones. It improves respiratory, cardiovascular health, and overall health. </h3> 
    <h3>Staying active can also help you maintain a healthy weight, reduce your risk </h3><h3>for type 2 diabetes, heart disease, and reduce your risk for some cancers.</h3>

     
       <VideoPlayer1 src={video2}   width='980' height='550' className="border border-dark" autoplay/>
       &nbsp;

    <h3 > Staying active and healthy allows you to do activities that require
       </h3> <h3> a certain level of physical fitness. For example, hiking to the top of
       </h3> <h3>a mountain is a rewarding experience that instills a sense of accomplishment 
       </h3> <h3>and provides spectacular scenery, but there are people who cannot experience 
       </h3> <h3>this due to fitness limitations. </h3> 
       <VideoPlayer1 src={video3}   width='980' height='550' className="border border-dark" autoplay/>
      &nbsp;
       <VideoPlayer src={video1}   width='980' height='550' className="border border-dark" autoplay/>
&nbsp;
       <h3>Encourage your family to be more active, and challenge yourself to meet daily or weekly
       </h3> <h3> physical activity goals. Play outdoor sports with the whole family, schedule time each day
       </h3> <h3> to go to the gym, or pick up healthy, active hobbies like hiking or cycling. National Physical
       </h3> <h3> Fitness and Sports Month is a great time to get more active, but don’t stop at the end of the
       </h3> <h3>  month. Make exercise and physical activity a permanent part of your daily routine! </h3>
       &nbsp;
       </center>
    </div>
    
    
  )
}