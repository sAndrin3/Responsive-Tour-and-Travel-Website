import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
    </div>
  );
}

export default App
