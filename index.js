import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";

//Creating root from index.html
const root = createRoot(document.getElementById("reactEntry"));

//Render the 2048 game
root.render(<App />);
