import React from 'react';
import  Img1  from './layout/assests/day2.1.jpg';
import  Img2  from './layout/assests/day2.2.jpg';
import  Img3  from './layout/assests/day2.3.jpg';
import  Img4  from './layout/assests/day2.4.jpg';
import  Img5  from './layout/assests/day2.5.jpg';
import {useHistory} from "react-router-dom";


export default function Day2(){
  let history = useHistory();
  

  return(

    <div className="Day2"> 
   
     <h1 className="text-white bg-dark">Welcome to Day 2 </h1>
&nbsp;
     <h2 className="text-primary"> Back And Biceps </h2>
&nbsp;
    
<h3> 1 Pull-up </h3>

<img src={Img1} alt="" />

<h4> Sets 5 Reps 6-10 Tempo 2011 Rest 60sec Hold a pull-up bar with an overhand grip, hands 
</h4> <h4>shoulder-width apart. Brace your core, then pull yourself up until your lower chest touches
</h4> <h4> the bar. Lower until your arms are straight again.</h4>
    &nbsp;
<h3> 2 Bent-over row </h3>

<img src={Img2} alt="" />

<h4> Sets 5 Reps 10 Tempo 2010 Rest 60sec Hold a barbell using an overhand grip, hands just outside your
</h4> <h4> legs, and lean forward from the hips. Bend your knees slightly and brace your core, then pull the bar 
</h4> <h4>up, leading with your elbows. Lower it back to the start</h4> 

&nbsp;
<h3> 3 Chin-up </h3>

<img src={Img3} alt="" />

<h4> Sets 3 Reps 6-10 Tempo 2011 Rest 60sec Hold a pull-up bar with hands shoulder-width apart, palms 
</h4> <h4>facing you. Brace your core, then pull yourself up until your chin is over the bar. Lower until your
</h4> <h4>varms are straight again. Repeat this thrice with max 10 Reps</h4> 

&nbsp;
<h3> 4 Standing biceps curl </h3>

<img src={Img4} alt="" />

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec Stand with dumbbells by your sides, palms facing forwards.
</h4> <h4> Keeping your elbows tucked in, curl the weights up, squeezing your biceps at the top. Lower them back
</h4> <h4> to the start. Repeat this Thrice with 15 Reps Max in each set</h4>
 
 &nbsp;
<h3> 5 Seated incline curl</h3>

<img src={Img5} alt="" />

<h4> Sets 3 Reps 12-15 Tempo 2011 Rest 60sec Sit on an incline bench with dumbbells by your sides, palms facing
</h4> <h4> forwards. Keeping your elbows tucked in, curl the weights up, squeezing your biceps at the top. Lower them 
</h4> <h4> back to the start. Repeat this thrice with 15 Reps max in a set</h4>
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