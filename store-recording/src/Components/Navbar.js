import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

class NavBar extends Component {
    render() {
        return (
            <NavWraper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {
                // https://www.iconfinder.com/icons/1243689/call_phone_icon
                //     Creative Commons (Attribution 3.0 Unported);
                //         https://www.iconfinder.com/Makoto_msk
                }
                <Link to="/"></Link>
                <img src={logo} alt= "store" className="navbar-brandname"/>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-items ml-5"></li>
                    <Link to="/" className="nav-link">Products</Link>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fa fa-cart-plus">my cart</i>
                    </ButtonContainer>
                </Link>
            </NavWraper>
        )
    }
}

const NavWraper = styled.nav`
background : var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.7rem;
    text-transform:uppercase
}`
export default NavBar
