import React from 'react';
import  Img1  from './layout/assests/day3.1.jpg';
import  Img2  from './layout/assests/day3.2.jpg';
import  Img3  from './layout/assests/day3.3.jpg';
import  Img4  from './layout/assests/day3.4.jpg';
import  Img5  from './layout/assests/day3.5.jpg';
import {useHistory} from "react-router-dom";

export default function Day3(){
  let history = useHistory();
  return(

    <div className="Day3"> 
   
     <h1 className="text-white bg-dark">Welcome to Day 3 </h1>
     &nbsp;
    
     <h2 className="text-primary"> Legs And Abs </h2>
     &nbsp;

<h3> 1 Back squat</h3>

<img src={Img1} alt="" />

<h4> Sets 5 Reps 10 Tempo 2010 Rest 60sec
</h4> <h4> Stand tall, holding a bar across the back of your shoulders. Keeping your chest up and core braced, 
</h4> <h4>squat down as deep as you can. Drive back up through your heels to return to the start.</h4>
&nbsp;

<h3> 2 Good morning</h3>

<img src={Img2} alt="" />

<h4> Sets 5 Reps 10 Tempo 2010 Rest 60sec
</h4> <h4>Stand tall holding a light barbell across the backs of your shoulders, feet shoulder-width apart. 
</h4> <h4> With your core braced, bend forwards slowly from the hips, as far as your hamstrings allow but 
</h4> <h4>not past horizontal. Return to the start.</h4>
&nbsp;

<h3> 3 Hip thrust </h3>

<img src={Img3} alt=""/>

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec
</h4> <h4>Sit with your upper back supported on a bench, holding a barbell across the tops of your thighs. 
</h4> <h4>Thrust your hips up, squeeze your glutes at the top, and then return to the start. </h4>

&nbsp;

<h3> 4 Incline dumbbell press</h3>

<img src={Img4} alt="" />
<h4> 
Sets 3 Reps 12-15 Tempo 2110 Rest 60sec
</h4> <h4>Lie on an incline bench, holding a dumbbell in each hand by your shoulders. Press the weights 
</h4> <h4>up until your arms are straight, then lower them back to the start under control.
</h4>
&nbsp;
<h3> 5 Incline dumbbell flye</h3>

<img src={Img5} alt="" />

<h4> Sets 3 Reps 12-15 Tempo 2111 Rest 60sec
</h4> <h4>Lie on an incline bench, holding a dumbbell in each hand above your face, with your palms facing and 
</h4> <h4>a slight bend in your elbows. Lower them to the sides, then bring them back to the top.</h4>

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