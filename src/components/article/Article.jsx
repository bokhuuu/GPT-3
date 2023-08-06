import React from 'react'
import "./article.css"

export default function Article({ imgUrl, date, text }) {
    return (
        <div className='gpt3__blog-container-article'>
            <div className='gpt3__blog-container-article-image'>
                <img src={imgUrl} alt="blog" />
            </div>
            <div className='gpt3__blog-container-article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}
