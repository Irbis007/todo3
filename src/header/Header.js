import { Link } from 'react-router-dom';
import {useState} from 'react'


import CheckTheme from '../checkTheme/CheckTheme'



import './header.css'


const Header = ({sendTheme}) =>{
    let [blackTheme, setBlackTheme] = useState(false)
    let [active1, setActive1] = useState('')
    let [active2, setActive2] = useState('')

    const getTheme = (theme) =>{
        setBlackTheme(!theme)
        sendTheme(theme)
    }
    let classe = ''
    if(blackTheme) {
        classe = ' black__theme'
    }


    
    const onClick1 = () =>{
        setActive1('active')
        setActive2('')
    }
    const onClick2 = () =>{
        setActive2('active')
        setActive1('')
    }
    return(
        <div className={"header"+classe}>
            <CheckTheme getTheme={getTheme}/>
            <Link to='/'  className={`${active1}`} onClick={()=> onClick1()}>Public</Link>
            <Link to='/private' className={`${active2}`} onClick={()=> onClick2()}>Private</Link>
        </div>
    )
}


export default Header;
