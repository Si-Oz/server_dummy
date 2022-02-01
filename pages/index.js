import Head from 'next/head'
import Card from '../components/Card';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Announcement from '../components/Announcement';

export default function Home({articles}) {

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

  const headingsList = returnHeadings(articles)
  const articlesList = returnArticles(articles)
  const cardDisplay = renderCards(headingsList , articlesList)

  return (
    <div>
      <Head>
        <title>Oz support and FAQ</title>
        <meta name="description" content="Customer Support afor Oz Hair and Beauty" />
        <link href="https://cdn.shopify.com/s/files/1/1588/9573/t/387/assets/theme.scss.css?v=6533443260166724196" rel="stylesheet"/>
        <link rel="icon" href="https://cdn.shopify.com/s/files/1/1588/9573/t/387/assets/theme.scss.css?v=6533443260166724196" />
      </Head>
      <div className='header header_mobile'>
        
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