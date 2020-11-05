import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'


import Hero from './components/Hero'
import Projects from './components/Projects'
import { projectData } from './components/projectData'
import Feature from './components/Feature'
// import Footer from './components/Footer'

// STYLES //
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Orbitron', sans-serif;
        max-width: 100%;
        max-height: 100%;
        --color-text: white;
        --color-textSecondary: grey;
        --color-bgColor: #00000d;
        --color-bgColorSecondary: #10223e;
    }
`


// COMPONENT //
const App = () => {
    return (
        <Router>
        <GlobalStyle />
            <Hero />
            <Projects heading='My Projects' data={projectData}/>
            <Feature />
            {/* <Footer /> */}
        </Router>
    )
}

export default App