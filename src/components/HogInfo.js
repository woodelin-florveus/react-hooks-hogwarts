import React, { useState } from "react"


import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const hogsImg = {
    "Augustus Gloop": augustus_gloop,
    "Babe": babe,
    "Bailey": bailey,
    "Cherub": cherub,
    "Galaxy Note": galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    "Peppa": peppa,
    "Piggy smalls": piggy_smalls,
    "Piglet": piglet,
    "Porkchop": porkchop, 
    "Trouble" : trouble,
    "Truffle Shuffle": truffle_shuffle
}

console.log(hogsImg)


function HogInfo({name, specialty, weight, greased, hog, src}){
    const [display, setDisplay] = useState(false)
  
    function changeDisplay(e){
       setDisplay((display) => !display)
       console.log(display)
    }
  
      return(
          
              <div onClick ={changeDisplay} className="ui eight wide column">
                  
                  <img src={hogsImg[name]} alt="image name" />
                  
                  <h1  >Name: {name}</h1>
                  {display ? <h4>specialty:{specialty}</h4> : null}
                  {display ? <h4>weight:{weight}</h4> : null}
                  {display ? <h4>greased?{greased}</h4> : null}                                   
             </div>
        
      )
  }

  export default HogInfo;

  