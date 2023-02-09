import { Link } from 'react-router-dom';
import {useState} from 'react'


import CheckTheme from '../checkTheme/CheckTheme'



import './header.css'


const Header = () =>{
    let [blackTheme, setBlackTheme] = useState(false)

    const getTheme = (theme) =>{
        setBlackTheme(!theme)
    }
    let classe = ''
    if(blackTheme) {
        classe = ' black__theme'
    }
    
    return(
        <div className={"header"+classe}>
            <CheckTheme getTheme={getTheme}/>
            <Link to='/'>Public</Link>
            <Link to='/private'>Private</Link>
        </div>
    )
}


export default Header;
