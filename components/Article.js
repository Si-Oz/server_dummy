import React from 'react'


function Article({article}) {
    return (
        <div>
            <div className='article-container'>
            <div className='article-body'>
                <h1>{article.article.title}</h1>
                <div dangerouslySetInnerHTML={{__html: article.article.body}} />
                <br />
            </div>
        </div>
        </div>
    )
}

export default Article
