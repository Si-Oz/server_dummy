import Head from 'next/head'
import Card from '../components/Card';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Announcement from '../components/Announcement';

export default function Home({articles}) {
  const router = useRouter()
  const [errorBanner, setErrorBanner] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchError, setSearchError] = useState(false)
  const renderCards = (headings, articles) => {
    let articleProps = []
    let cards = []
    headings.forEach(heading => {
      articleProps.push(
        articles.filter(article => article.label === heading)
      );
        cards.push(< Card key={heading} heading = { heading } articles = {articleProps}> </Card >)
        articleProps = []
    })
    return cards
  }

  const returnArticles = (data) => {
    let articlesArray = []
    data.articles.forEach((element) => {
      articlesArray.push({
        "label": element.label_names[0],
        "title": element.name,
        "url": element.html_url,
        "id": element.id
      })
    })
    return articlesArray
  }

  const returnHeadings = (data) =>{
    let headingsArray = []
    data.articles.forEach((element) => {
      if (!(headingsArray.includes(element.label_names[0]))) {
        headingsArray.push(element.label_names[0])
      }
    })
    return headingsArray
  }

  function formHandler(e) {
    setSearchTerm(e.target.value)
  }

  function handleSubmit(event){
    let query = event.target.searchTerm.value
    searchQuery(query).then((response) =>{
        router.push(`/search/${query}`)
    }).catch((err) =>{
      console.log(err)
      setSearchError(true)
    })
    event.preventDefault();
  }

  async function searchQuery(query){
    // let data = await fetch(`/api/search/${query}`)
    // let dataArticles = await data.json()
    // let articles = dataArticles.articles.results
    // return articles
  }

  const headingsList = returnHeadings(articles)
  const articlesList = returnArticles(articles)
  const cardDisplay = renderCards(headingsList , articlesList)

  return (
    <div>
      <Head>
        <title>Oz support and FAQ</title>
        <meta name="description" content="Customer Support for Oz Hair and Beauty" />
        <link href="https://cdn.shopify.com/s/files/1/1588/9573/t/387/assets/theme.scss.css?v=6533443260166724196" rel="stylesheet"/>
        <link rel="icon" href="https://cdn.shopify.com/s/files/1/1588/9573/t/387/assets/theme.scss.css?v=6533443260166724196" />
      </Head>
      <div className='header header_mobile'>
      <form onSubmit={handleSubmit}>
                <label>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" aria-hidden="true"><path filrule="#2D2D2D" fillrule="evenodd" d="M21.5 12a8.5 8.5 0 016.49 13.989L32 30l-2 2-4.18-4.179A8.5 8.5 0 1121.5 12zm0 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"></path></svg>
                <input type="text" value={searchTerm} id="searchTerm" placeholder="Search For Help..." onChange={formHandler}></input>
                <input type = "submit" value ="" className='submit'/>
                </label>
            </form> 
        </div>

      <div className='grid-container'>
      {cardDisplay}
      <div>
        <div>
          <div>
          <legend>
                Need to get in touch ?
          </legend>
          </div>
        </div>
        <button className='contact-button'>
            Contact Us Now
          </button>
      </div>
    </div>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://ozhairandlouti.zendesk.com/api/v2/help_center/articles')
  const articles = await res.json()
  
  return {
    props: {
      articles: articles
    },
    revalidate: 300
  }
}