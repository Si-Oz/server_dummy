import React from 'react'
import Link from 'next/link'
import Announcement from './Announcement'

function ArticleList({articlesByCategory, error}) {
if(error){
    throw new Error("Did not return result from search API")
} 
    else {
    function renderView(){
        let articles = articlesByCategory
        let articleDisplay = []
       articles.forEach((element) => {
         articleDisplay.push(<li>
        <Link href={`article/${element.id}`} >{element.title}</Link>
         </li>)
       })

        return articleDisplay
    }

    return (
        <>
        <Announcement />
        <div className='article-list'>
            {renderView()}
        </div>
        </>
    )
        
    }

}

export default ArticleList
