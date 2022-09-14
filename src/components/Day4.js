import React from 'react';
import  Img1  from './layout/assests/day4.1.jpg';
import  Img2  from './layout/assests/day4.2.jpg';
import  Img3  from './layout/assests/day4.3.jpg';
import  Img4  from './layout/assests/day4.4.jpg';
import  Img5  from './layout/assests/day4.5.jpg';
import {useHistory} from "react-router-dom";

export default function Day4(){
  let history = useHistory();
 
  return(

    <div className="Day4"> 
   
     <h1 className="text-white bg-dark">Welcome to Day 4 </h1>
&nbsp;
 <h2 className="text-primary" >Back And Shoulders </h2>
&nbsp;
    
<h3> 1 Overhead press </h3>

<img src={Img1} alt="" />

<h4> Sets 5 Reps 10 Tempo 2010 Rest 60sec
</h4> <h4>Hold a bar in front of your neck with your hands just wider than shoulder-width apart. Keeping your 
</h4> <h4>chest up and core braced, press the bar overhead until your arms are straight. Lower it back to the start.</h4>
&nbsp; 

   <h3> 2 Rack pull </h3>

<img src={Img2} alt="" /> 

<h4> Sets 5 Reps 10 Tempo 2111 Rest 60sec
</h4> <h4>Stand tall in front of a barbell resting on safety bars at knee height. Bend and grasp the bar with an 
</h4> <h4>overhand grip, then stand up until your back is straight again, squeezing your shoulder blades together 
</h4> <h4>at the top. Do this for 5 times and max 10 reps in a set</h4>

   &nbsp;   
<h3> 3 Seated dumbbell press </h3>

<img src={Img3} alt="" /> 
<h4> Sets 3 Reps 12-15 Tempo 2010 Rest 60sec
</h4> <h4>Sit on an upright bench with a dumbbell in each hand at shoulder height. Keeping your chest up,
</h4> <h4>press the weights directly overhead until your arms are straight, then lower them back to the start.</h4>

&nbsp;
<h3> 4 Lateral raise </h3>

<img src={Img4} alt="" /> 

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec
</h4> <h4>Stand tall, holding a light dumbbell in each hand with palms facing. Keeping your chest up and a bend in 
</h4> <h4>your elbows, raise the weights out to shoulder height, then lower back to the start.</h4>

&nbsp;

<h3> 5 Reverse flye </h3>

<img src={Img5} alt="" /> 

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec
</h4> <h4>Bend forward from the hips holding a light dumbbell in each hand with palms facing. Keeping a slight bend
</h4> <h4>in your elbows, raise the weights out to shoulder height, then lower back to the start.</h4>

&nbsp;

&nbsp;
   <h1> </h1>
      <button  type="button" className="btn btn-success"  onClick={()=> { history.push("./welcomecustomer")}}>
          End Session
        </button>
      <p> </p>

    </div>
    
    
  )
}