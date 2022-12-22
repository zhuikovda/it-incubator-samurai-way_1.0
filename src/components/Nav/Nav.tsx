import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Nav.module.css';


const Nav = () => {
    return <nav className={cl.nav}>

        <ul >
            <li className={cl.item}><NavLink to="/profile" activeClassName={cl.active}>Profile</NavLink></li>
            <li className={cl.item}><NavLink to="/dialogs" activeClassName={cl.active}>Messages</NavLink></li>
            <li className={cl.item}><NavLink to="/news" activeClassName={cl.active}>News</NavLink></li>
            <li className={cl.item}><NavLink to="/music" activeClassName={cl.active}>Music</NavLink></li>
            <li className={cl.item}><NavLink to="/settings" activeClassName={cl.active}>Settings</NavLink></li>
        </ul>
    </nav>
}
export default Nav;