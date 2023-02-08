import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Private from "../pages/Private";
import Public from "../pages/Public";


import Header from "../header/Header";


const App = () =>{

    return(
        <Router>
            <div className="app">
                <Header/>
                <main className="main">
                    
                    <Routes>
                        <Route path="/public"  element={<Public/>}/>
                        <Route exact path="/private" element={<Private/>}/>
                        <Route exact path="*" element={<Public/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;