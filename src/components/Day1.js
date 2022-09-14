import React from 'react';
import  Img1  from './layout/assests/day1.1.jpg';
import Img2 from './layout/assests/day1.2.jpg';
import  Img3  from './layout/assests/day1.3.jpg';
import  Img4  from './layout/assests/day1.4.jpg';
import  Img5  from './layout/assests/day1.5.jpg';
import {useHistory} from "react-router-dom";


export default function Day1(){
  let history = useHistory();
  

  return(

    <div className="Day1"> 
   
     <h1 className="text-white bg-dark" >Welcome to Day 1</h1>
     &nbsp;
     <h2 className="text-primary"> Chest And Triceps </h2>
     &nbsp;
    
     <h3> 1 Bench press </h3>
   &nbsp;
    <img src={Img1} alt="" />
     <div>
     <h4   >Sets 5 Reps 10 Tempo 2010 Rest 60sec Lie on a flat bench holding a barbell with your hands.</h4>
     <h4 >slightly wider than shoulder-width apart. Brace your core, then lower the bar towards your.</h4>
     <h4  >chest. Press it back up to the start.</h4> </div>

     &nbsp;
     <h3> 2 Triceps dip </h3>
    
    <img src={Img2} alt="" />

    <h4> Sets 5 Reps 6-10 Tempo 2110 Rest 60sec Grip rings or parallel bars with your arms straight. 
    </h4> <h4> Keeping your chest up, bend your elbows to lower your body as far as your shoulders allow. 
    </h4> <h4> Press back up powerfully to return to the start.</h4>
    &nbsp; 

    <h3> 3 Incline dumbbell press </h3>

    <img src={Img3} alt="" />

    <h4> Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Lie on an incline bench holding a dumbbell in each
    </h4> <h4> hand by your shoulders. Press the weights up until your arms are straight, then lower them 
    </h4> <h4>   back to the start under control.</h4>
    &nbsp;
    <h3> 4 Incline dumbbell flye</h3>

    <img src={Img4} alt="" />

    <h4> Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Lie on an incline bench holding a dumbbell in each hand above 
    </h4> <h4>your face, with your palms facing and a slight bend in your elbows. Lower them to the sides, then bring 
    </h4> <h4>them back to the top. Repeat it thrice and each set has max 15 Reps  </h4>
&nbsp;
    <h3> 5 Triceps extension</h3> 

     <img src={Img5} alt="" />

     <h4> Sets 3 Reps 12-15 Tempo 2010 Rest 60sec Stand tall holding a dumbbell over your head with both hands,
     </h4> <h4> arms straight. Keeping your chest up, lower the weight behind your head, then raise it back to the start.</h4>
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