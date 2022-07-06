import type { NextPage } from 'next'
import Head from 'next/head'
import { gql } from "@apollo/client";
import styles from './index.module.scss'
import Card from 'components/Card'
import client from 'utils/setupApolloClient'

interface Market {
  location: {
    id: string
    name: string
    image?: {
      src: string
    }
  }
}

const Home: NextPage<{markets?: Market[]}> = ({ markets = [] }) => (
  <div className={styles.container}>
    <Head>
      <title>Fellow farmer</title>
      <meta name="description" content="Lorem ipsum dolor sit amet...." />
      <link rel="icon" href="https://fellowfarmer.com/fellow.farmer.ico" />
    </Head>

    <main>
      <h1 className={styles.heading}>
        Fellow Farmer
      </h1>

      <section className={styles.markets}>
        {markets.map(({ location }: Market) => (
          <Card 
            key={location.id} 
            title={location.name} 
            image={location?.image ? { src: location?.image?.src, alt: location.name} : undefined} 
          />
        ))}
      </section>
    </main>
  </div>
)

export async function getStaticProps() {
  const queryMarkets = gql`
    query MarketsQuery {
      markets(limit: 0, skip: 0) {
        location {
          id
          name
          image {
            src
          }
        }
      }
    }
  `

  const { data } = await client.query({
    query: queryMarkets
  });

  return {
    props: {
      markets: data.markets,
    },
 };
}

export default Home
