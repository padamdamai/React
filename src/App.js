import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import Main from './Components/Main.js';
import Info from  './Components/test.js';
import Contact from './Components/Contact';
import Array from './Components/Array';
import data from './Components/datas';
export default function App(){
  const cards = data.map(items=>{
    return (
      
      <Contact 
          key ={items.id}
           img={items.img}
           name={items.title}
          content={items.content}
          opensport={items.opensport}
          location={items.location}
          />
        
    )
  })
 
return <>
          <Navbar/>
          <Main />
          < Info />
         {cards}
          <Array/> 
            </>
}

