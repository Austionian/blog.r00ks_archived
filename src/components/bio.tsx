/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Twitter = require("../assets/twitter_black.svg")
const Github = require("../assets/github_black.svg")
const Email = require("../assets/email_black.svg")

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
        src="../images/theo.webp"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          <br/>
          Find me on
          {` `}
          <a href={`https://twitter.com/${social.twitter || ``}`}>
            <Twitter 
              className="social-icon"
              alt="twitter icon"
            />
          </a>
          {`, `}
          <a href={`https://github.com/${social.github || ''}`}>
            <Github 
              className="social-icon"
              alt="github icon"
            />
          </a>
          {`,or `}
          <a href={`mailto:${social?.email || ''}`}>
            <Email 
              className="social-icon"
              alt="email icon"
            />
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
