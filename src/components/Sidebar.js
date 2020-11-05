import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { BiX } from 'react-icons/bi'

// STYLES //
const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #10223e;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`
const CloseIcon = styled(BiX)`
  color: white;
  &:hover {
    color:grey;
  }
`
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: grey;
  }
`
const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
const SidebarRoute = styled(Link)`
  background: #fff;
  white-space: nowrap;
  padding: 16px 64px;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: grey;
  }
`

// COMPONENT //
const Sidebar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>About Me</SidebarLink>
                <SidebarLink to='/'>Resume</SidebarLink>
                <SidebarLink to='/'>Projects</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Don't Click</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar