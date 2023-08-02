import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import logo from "../../assets/logo.svg"
import "./navbar.css"

const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )
}

export default function Navbar() {
    const [toogleMenu, setToogleMenu] = useState(false)

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='gpt3__navbar-links-container'>
                    <Menu />
                </div>
                <div className='gpt3__navbar-sign'>
                    <p>sign in</p>
                    <button type="button">Sign Up</button>
                </div>
                <div className='gpt3__navbar-menu'>
                    {toogleMenu ? <RiCloseLine color="white" size={27}
                        onClick={() => setToogleMenu(false)} />
                        : <RiMenu3Line color="white" size={27}
                            onClick={() => setToogleMenu(true)} />
                    }
                    {toogleMenu && (
                        <div className='gpt3__navbar-menu-container scale-up-center' >
                            <div className='gpt3__navbar-container-links'>
                                <Menu />
                                <div className='gpt3__navbar-menu-container-links-sign'>
                                    <p>sign in</p>
                                    <button type="button">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}
