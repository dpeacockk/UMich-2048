import React, { useState, useEffect } from "react";
import "./styles.css";
import Tile from "./tile"

function Row({vals}) {

    const [tiles, setTiles] = useState([]);

    return (
    <div class="row">
        <Tile val={vals[0]}/>
        <Tile val={vals[1]}/>
        <Tile val={vals[2]}/>
        <Tile val={vals[3]}/>
    </div>
    )

}//Row()
  
  export default Row;