import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import austin from '../public/images/austin_glitch.webp'
import config from '../config'

const Bio = () => {
  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = config.author;
  const social = config.social;

  return (
    <div className="bio">
      <div style={{height: '50px', width: '50px'}}>
        <Image
          className="bio-avatar"
          layout="fixed"
          placeholder="blur"
          src={austin}
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      </div>
      {author?.name && (
        <p>
          Written by <a href="https://r00ks.io"><strong>{author.name}</strong></a> {author?.summary || null}
          <br/>
          Find me on
          {` `}
          <a href={`https://twitter.com/${social.twitter || ``}`} aria-label="twitter profile">
            <FontAwesomeIcon
              icon={faTwitter} 
            />
          </a>
          {`, `}
          <a href={`https://github.com/${social.github || ''}`} aria-label="github profile">
            <FontAwesomeIcon
              icon={faGithub}
            />
          </a>
          {`,or `}
          <a href={`mailto:${social?.email || ''}`}aria-label="email address">
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
