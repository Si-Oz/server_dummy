import React from 'react'
import { useRouter } from 'next/router'
import ArticleList from '../../../components/ArticleList'
import BreadCrumb from '../../../components/BreadCrumb'
import Header from '../../../components/Header'

function Index({articlesByCategory}) {
const {query} = useRouter()

    return (
        <div>
            <BreadCrumb heading = {query} />
            <Header />
            <ArticleList articlesByCategory={articlesByCategory} />
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://ozhairandlouti.zendesk.com/api/v2/help_center/articles/`)
    const article = await res.json()
    const articlesByCategory = article.articles.filter(element => element.label_names[0] == context.params.topic)
        
return {
    props:{
        articlesByCategory: articlesByCategory,
    },
    revalidate: 300
        }
        
}


export const getStaticPaths = async () => {
    const res = await fetch('https://ozhairandlouti.zendesk.com/api/v2/help_center/articles/')
    const articles = await res.json()
    const labels = articles.articles.map(element => element.label_names[0]);
    const paths = labels.map(label => ({params: {topic:label}}))
        return {
        paths,
        fallback: false
   }
}
export default Index


