import React, { useState, useEffect } from "react";
import "./styles.css";
import Tile from "./tile";
import Row from "./row";

function Board() {
    const [score, setScore] = useState(10);
    const [rows, setRows] = useState([]);

    function resetBoard(){
        setScore(0)
    }
    
    return (
    <div class="board">
        <h2>Score: {score} <br />
            <form>
                <input class="reset" 
                       type="button" 
                       value="Reset"
                       onClick={() => resetBoard()}
                />
            </form>
        </h2>
        
        <Row />
        <Row />
        <Row />
        <Row />
    </div>
    )
}//Board()
  
  export default Board;