import React, { useState, useEffect } from "react";
import "./styles.css";


function Tile() {

    const [tile_value, setValue] = useState(0);

    return (
    <div class="tile">
        <div>{tile_value}</div>
    </div>
    )

}//Tile()
  
  export default Tile;