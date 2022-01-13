import React from 'react'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'

import { getAllPostIds, getPostData } from '../../lib/blog'

import Bio from '../../components/bio'
import Layout from '../../components/layout'
import LeftNav from '../../components/leftNav/LeftNav'
import DateFormatter from '../../components/date-formatter'

const Post = ({
  postData
}: {
  postData: {
    id: string
    title: string
    date: string
    description: string
    contentHtml: string
    headings: any[]
  }
}) => {
  const [ids, setIds] = React.useState<Array<{ id: string; title: string }>>(
    []
  );

  React.useEffect(() => {
    const titles = document.querySelectorAll('h2');
    const idArrays = Array.prototype.slice
      .call(titles)
      .map((title) => ({ id: title.id, title: title.innerText })) as Array<{
      id: string;
      title: string;
    }>;
    setIds(idArrays);
  }, []);

  return (
    <Layout location={postData.id} title='blog.r00ks'>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <LeftNav ids={ids}/>
      <div className="body-wrapper">
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{postData.title}</h1>
          <p><DateFormatter dateString={postData.date} /></p>
        </header>
        <div className="article">
          <section dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      </div>
      <nav className="blog-post-nav footer-wrapper">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
          }}
        >
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
          {/* <li>
            {previous && (
              <Link href={previous.fields.slug}>
                <a>← {previous.frontmatter.title}</a>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link href={next.fields.slug}>
                <a>{next.frontmatter.title} →</a>
              </Link>
            )}
          </li> */}
        </ul>
      </nav>
    </Layout>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  
  return {
    props: {
      postData
    }
  }
}