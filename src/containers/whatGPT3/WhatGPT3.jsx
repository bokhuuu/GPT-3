import React from 'react'
import "./whatGPT3.css"
import Features from '../features/Features'

export default function WhatGPT3() {
    return (
        <div className='gpt3__whatgpt3 section__margin id="wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Features title="zura" text="bokhua" />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <p>Explore the Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Features />
                <Features />
                <Features />
            </div>

        </div >
    )
}
