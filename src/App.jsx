import React from 'react'

import { Header, WhatGPT3, Features, Possibility, Blog, Footer } from "./containers"
import { Navbar, Brand, CTA } from "./components"
import "./App.css"

export default function App() {
    return (
        <div className='app'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Footer />
        </div>
    )
}