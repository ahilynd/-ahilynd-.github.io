import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #63D471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    alight-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    &.active {
        color: 'blue';
    }


`;

export const Bars = styled(FaBars)`
    display: none;
    color: 'red';
    @media screen and (max-width: 500px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }


`;

export const NavMenu = styled.div`
    display: flex;
    align-items: centers;
    margin-right: -20px;
    white-space: nowrap; */
    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 20px;
    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: 'black';
    padding: 10px 20px;
    color: 'white';
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 20px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: 'yellow';
        color: 'green';
    }

`;