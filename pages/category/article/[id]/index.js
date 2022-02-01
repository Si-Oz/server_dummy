import Article from "../../../../components/Article"
import BreadCrumb from "../../../../components/BreadCrumb"


 function article({article}) {


    return (
        <>
        <BreadCrumb />
        <Article article={article} />
        </>
    )
}


export const getStaticProps = async (context) => {
    const res = await fetch(`https://ozhairandlouti.zendesk.com/api/v2/help_center/articles/${context.params.id}`)
    const article = await res.json()
    
return {
    props:{
        article
    },
    revalidate: 300
}
}

export const getStaticPaths = async () => {
const res = await fetch('https://ozhairandlouti.zendesk.com/api/v2/help_center/articles/')
const articles = await res.json()

const ids = articles.articles.map(article => article.id)
const paths = ids.map(id =>({params: {id:id.toString()}}))

return {
     paths,
     fallback: false
}
}


export default article 
