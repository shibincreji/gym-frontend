import React from 'react'
import VideoPlayer from 'react-video-js-player';
import video1 from "./layout/assests/contactus1.mp4";

export default function Contact(){
return (
<div>
<h1 className="text-white bg-dark" > Contact Us</h1>
<p></p>
    <h2 className="text-success">HEY VIST US NOW AND GET 50% ON NEW BOOKINGS </h2>
    <h4>Call Us at +383456654455</h4>
    <h4>email: testbuddy@gmail.com</h4>
    <h4>Follow us on Snapchat Instagram and Facebook</h4>
    <p></p>
<center> 
    <VideoPlayer src={video1}   width='980' height='550' className="border border-dark" autoplay/>
       &nbsp;
       </center>


</div>

)

}



/*
export const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <p>Stare at ceiling lay on arms while you're using the keyboard so this human feeds me, i should be a god wack the mini furry mouse but all of a sudden cat goes crazy get suspicious of own shadow then go play with toilette paper. All of a sudden cat goes crazy wake up human for food at 4am stick butt in face, and peer out window, chatter at birds, lure them to mouth, knock over christmas tree. Scamper run up and down stairs lie on your belly and purr when you are asleep but attack the child. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats hiding behind the couch until lured out by a feathery toy leave hair everywhere have secret plans so meow meow, i tell my human, so bite the neighbor's bratty kid find empty spot in cupboard and sleep all day. Need to chase tail wake up human for food at 4am. Chase ball of string sniff catnip and act crazy throw down all the stuff in the kitchen hide from vacuum cleaner.</p>
  </div>
)
*/
