import React from 'react'

import { Header, WhatGPT3, Features, Possibility, Blog, Footer } from "./containers"
import { Navbar, Brand, CTA } from "./components"

export default function App() {
    return (
        <div className='app'>
            <div className='gradient_bg'>
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