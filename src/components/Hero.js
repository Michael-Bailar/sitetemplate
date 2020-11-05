import React, { useState } from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import ImgBg from '../images/scifiBg.jpg'
import Sidebar from './Sidebar'

// STYLES //
const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`
const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw-1300px)/2);
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: var(--color-text);
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650 px) {
        width: 100%
    }
`
const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-botton: 1rem;
    box-shadow: 3px 5px #fff;
    letter-spacing: 3px;
    text-transform: uppercase;
`
const HeroP = styled.p`
    font-size: clamp(1rem, 2.5vw, 2rem);
    margin-bottom: 2rem;
    margin-top: 1.5rem;
`
const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #10223e;
    color: lightgrey;

    &:hover {
        background: grey;
        cursor: pointer;
        color: #10223e;
    }
`

// COMPONENT //
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={ toggle } />
            <Sidebar  isOpen={ isOpen } toggle={ toggle }/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Michael Bailar</HeroH1>
                    <HeroP>
                    “We are all very anxious to be understood, but there is one thing much more necessary, to understand other people.”<br></br>― George MacDonald</HeroP>
                    <HeroBtn>Don't Click</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
