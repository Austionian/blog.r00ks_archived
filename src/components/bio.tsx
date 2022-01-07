/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            email
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/alt.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
        imgStyle={{ borderRadius: '100%' }}
      />
      {author?.name && (
        <p>
          Written by <a href="https://r00ks.io"><strong>{author.name}</strong></a> {author?.summary || null}
          <br/>
          Find me on
          {` `}
          <a href={`https://twitter.com/${social.twitter || ``}`}>
            <FontAwesomeIcon
              icon={faTwitter} 
            />
          </a>
          {`, `}
          <a href={`https://github.com/${social.github || ''}`}>
            <FontAwesomeIcon
              icon={faGithub}
            />
          </a>
          {`,or `}
          <a href={`mailto:${social?.email || ''}`}>
            <FontAwesomeIcon 
              icon={faPaperPlane}
            />
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
