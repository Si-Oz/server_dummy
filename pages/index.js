import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div>
      {props}
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
