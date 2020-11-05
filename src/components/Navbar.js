import React from 'react'
import styled from 'styled-components'

import { BiMenu } from "react-icons/bi"

// STYLES //
const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`
const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }

    &:hover {
        color:grey;
    }
`
const Bars = styled(BiMenu)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`

// COMPONENT //
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
