import part from './part.svg';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';
import A from './A.mp3'
import B from './B.mp3'
import C from './C.mp3'
import D from './D.mp3'
import E from './E.mp3'
import F from './F.mp3'
import G from './G.mp3'

const Down= () => {
  const [chord, setChords]=useState('A');
  const [flag, setFlag]=useState(0);
  const myArray = [
    { id: 1, name: 'A', audio:new Audio(A)},
    { id: 2, name: 'B' ,audio:new Audio(B)},
    { id: 3, name: 'C' ,audio:new Audio(C)},
    { id: 4, name: 'D' ,audio:new Audio(D)},
    { id: 5, name: 'E' ,audio:new Audio(E)},
    { id: 6, name: 'F' ,audio:new Audio(F)},
    { id: 7, name: 'G' ,audio:new Audio(G)},
  ];
  const start = (chord) => {
    
     chord.audio && chord.audio.play();
    
  }
  useEffect(()=>{
    const interval =setInterval(()=>{
      var t=myArray[Math.floor(Math.random()*myArray.length)]
      setChords(chord=>t); 
      start(t);
    },3000);
    return () =>clearInterval(interval);
  },[]);
  
  const handleScroll=()=> {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <div style={{ backgroundImage: "url(./part.svg)" }}>
      <style type="text/css">
    {`
    .btn-flat {
      background-color: #f7cee0;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>
       <h1 ><span style={{ color: '#a5ceec' }}>HELLO</span> <span style={{ color: '#f7cee0' }}>WELCOME</span> <span style={{ color: '#f7cee0' }}>TO</span><span style={{ color: '#f7cee0' }}> AIR MUSIC</span></h1>
       <Button variant="flat" size="xxl"
       onClick={()=>{
         setFlag(!flag)
         handleScroll()
         }}>
        {flag? 'READY TO FLY': 'READY TO LAND'}
  </Button>
  

{flag? <h1 style={{ color: '#f7cee0' , fontSize: 50}}
  >wohoooo!</h1>: <h1 style={{ color: '#f7cee0' , fontSize: 500}}
  >{chord.name} </h1>}
     </div>
  );
}

export default Down;