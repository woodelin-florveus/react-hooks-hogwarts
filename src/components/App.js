import React, {useState} from "react";
import Nav from "./Nav";
import HogGrid from './HogGrid'
import HogFilter from './HogFilter'
import HogSelect from './HogSelect'
import hogs from "../porkers_data";

function App() {

  const[hogGreased, setHog] = useState(true)
  const [hogsName, setName] = useState(hogs)

    // console.log(hogGreased)

    function handleClick(){
      setHog((hogGreased) => !hogGreased)
    }

    const filterHog = hogGreased ? hogs : hogs.filter((hog) => {
      return hog.greased === true
    })

    function handleSelect(event){
      const nameFilter = filterHog.filter((hog) => {
        return (hog.name === event.target.value)
      })
        setName(nameFilter)
    }




  return (
    <div className="App">
      <Nav />
      <HogGrid hogs ={filterHog} />
      <HogFilter handleFilter={handleClick} />
      <HogSelect hogs={hogsName} handleSelectName={handleSelect} />
    </div>
  );
}

export default App;
