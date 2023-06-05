import React from 'react'
export default function card(){
   const date = new Date()
   const Hours = date.getHours()
   let Time ;
   if (Hours >= 12  && Hours <=17){
    Time = "Good Evening"
   }
   else if(Hours <= 12){
    Time = "Good Morning"
   }
   else{
    Time = "Good Night"
   }
   return <>
    <h1>Hey {Time}</h1>
   </>
  
}