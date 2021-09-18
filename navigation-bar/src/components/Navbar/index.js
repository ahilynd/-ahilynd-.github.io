import React from 'react'
//import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to='/change log' activeStyle>
                     Change Log
                 </NavLink>
                 <NavLink to='/contact' activeStyle>
                     Contact
                 </NavLink>
                 <NavLink to='/movies' activeStyle>
                     Movies
                 </NavLink>
                 <NavLink to='/my repository' activeStyle>
                     My Repository
                 </NavLink>
                 <NavLink to='/resources' activeStyle>
                     Resources
                 </NavLink>
                 <NavLink to='/todo list' activeStyle>
                     ToDo Lists
                 </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;