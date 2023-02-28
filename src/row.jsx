import React, { useState, useEffect } from "react";
import "./styles.css";
import Tile from "./tile"

function Row() {

    const [tiles, setTiles] = useState([]);

    return (
    <div class="row">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
    </div>
    )

}//Row()
  
  export default Row;