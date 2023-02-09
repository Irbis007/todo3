import { Link } from 'react-router-dom';


import CheckTheme from '../checkTheme/CheckTheme'



import './header.css'


const Header = () =>{

    
    return(
        <div className="header">
            <CheckTheme/>
            <Link to='/'>Public</Link>
            <Link to='/private'>Private</Link>
        </div>
    )
}


export default Header;
