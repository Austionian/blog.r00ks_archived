import { GetStaticProps } from 'next'
import Link from 'next/link'

import { getPostData, getSortedProjectsData } from '../lib/blog'
import { generateRssFeed } from '../lib/rss'
import Bio from '../components/bio'
import Layout from '../components/layout'
import config from '../config'
import DateFormatter from '../components/date-formatter'


const BlogIndex = ({ allPostsData }: {
  allPostsData: {
    title: string
    id: string
    date: string
    description: string
  }[]
}) => {

  return (
    <div className="body-wrapper">
    <Layout location={`/`} title={config.title}>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {allPostsData.map(({ id, title, date, description }) => {

          return (
            <li key={`/blog/${id}`}>
              <Link href={`/blog/${id}`}>
              <a className="post-link">
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                      <span itemProp="headline">{title}</span>
                  </h2>
                  <small className='date-text'><DateFormatter dateString={date} /></small>
                </header>
                <section>
                  <p>
                    {description}
                  </p>
                  <p className="text-small">
                    Read more
                  </p>
                </section>
              </article>
              </a>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
    </div>
  )
}

export default BlogIndex

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedProjectsData()

  await generateRssFeed();

  return {
    props: {
      allPostsData
    }
  }
}