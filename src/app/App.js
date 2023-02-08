import { BrowserRouter as Router, Routes, Route, Link,  IndexRoute} from "react-router-dom";
import Private from "../pages/Private";
import Public from "../pages/Public";


import Header from "../header/Header";


const App = () =>{

    return(

    <Route path={"/"} component={App} >
        <IndexRoute component={Public} />
        <Route path={"private"} component={Private} />
    </Route>
    )
}

export default App;