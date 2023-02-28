import React, { useState, useEffect } from "react";
import "./styles.css";
import Tile from "./tile";
import Row from "./row";

function Board() {
    let init_rows = [
        <Row vals={[0,0,0,0]}/>,
        <Row vals={[0,0,0,0]}/>,
        <Row vals={[0,0,2,0]}/>,
        <Row vals={[0,2,0,0]}/>
    ];
    
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(init_rows);

    function resetBoard(){
        setScore(0)
        setRows([init_rows])
    }//resetBoard()
    
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

        {rows}

        <div class="credits">
            <br/>Created by: Daniel Peacock
        </div>
    </div>
    )
}//Board()
  
  export default Board;