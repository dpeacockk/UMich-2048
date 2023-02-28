import React, { useState, useEffect } from "react";
import "./styles.css";
import Tile from "./tile";
import Row from "./row";

function Board() {
    let init_rows = [
        <Row key="row0" vals={[0,0,0,0]}/>,
        <Row key="row1" vals={[0,0,0,0]}/>,
        <Row key="row2" vals={[0,0,2,0]}/>,
        <Row key="row3" vals={[0,2,0,0]}/>
    ];
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(init_rows);

    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        if (e.key === "ArrowUp") {
          console.log("up arrow pressed");
        } else if (e.key === "ArrowDown") {
          console.log("down arrow pressed");
        } else if (e.key === "ArrowLeft") {
          console.log("left arrow pressed");
        } else if (e.key === "ArrowRight") {
          console.log("right arrow pressed");
        }
      });

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
        Created by: Daniel Peacock 
        </div>
    </div>
    )
}//Board()
  
  export default Board;