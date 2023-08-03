import React from "react"
import "./features.css"

export default function Features({ title, text }) {
    return (
        <div className='gpt3__features-container-feature'>
            <div className='gpt3__features-container-feature-title'>
                <div>
                    <h1>{title}</h1>
                </div>
                <div className='gpt3__features-container-feature-text'>
                    {text}
                </div>
            </div>
        </div>
    )
}