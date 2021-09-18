import React from 'react';
import{
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
          <Nav>
              <Bars />

              <NavMenu>
                  <NavLink to='/about' activeStyle>
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
          </Nav>
        </>
    );
};