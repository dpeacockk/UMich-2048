import React, { useState, useEffect } from "react";
import "./styles.css";


function Tile({val}) {

    const [tile_value, setValue] = useState(0);

    return (
    <div class="tile">
        <div>{val}</div>
    </div>
    )

}//Tile()
  
  export default Tile;