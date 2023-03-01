import React, { useState, useEffect } from "react";
import "./styles.css";
import Board from "./board";

function App() {
    return (
    <div>
        <h1>University of Michigan <br />2048</h1>
        <Board />
    </div>
    )
}//App()
  
  export default App;