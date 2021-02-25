import React from "react";
import Nav from "./Nav";
import HogGrid from './HogGrid'
import HogFilter from './HogFilter'
import hogs from "../porkers_data";

console.log(hogs)

function App() {
  return (
    <div className="App">
      <Nav />
      <HogGrid hogs ={hogs} />
      <HogFilter />
    </div>
  );
}

export default App;
