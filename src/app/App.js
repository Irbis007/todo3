import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from 'react'

import Private from "../pages/Private";
import Public from "../pages/Public";


import Header from "../header/Header";

import './app.css'


const App = () =>{

    let [blackTheme, setBlackTheme] = useState(false)

    const getTheme = (theme) =>{
        setBlackTheme(!theme)
    }
    let classe = ''
    if(blackTheme) {
        classe = ' black__theme'
    }

    return(
        <Router>
            <div className={"app"+classe}>
                <Header sendTheme={getTheme}/>
                <main className="main">
                    <Routes>
                        <Route path="/"  element={<Public/>}/>
                        <Route exact path="/private" element={<Private/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;
