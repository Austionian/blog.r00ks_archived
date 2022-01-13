import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

import Header from '../components/header/Header'
import Meta from '../components/meta'
import Seo from '../components/seo'

config.autoAddCss = false

const Layout = ({ location, title, children }) => {
  const rootPath = `/`
  const isRootPath = location === rootPath

  return (
    <>
      <Meta />
      <Seo title={title} description={`A personal blog by Austin Rooks (r00ks).`} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <div className="topbar-container">
          <div className="topbar">
          </div>
        </div>
        <Header className="global-header" title={title} location={location} />
        <main>
          {children}
        </main>
        <footer className="footer-wrapper" data-is-root-path={isRootPath}>
          <FontAwesomeIcon icon={faCopyright} />{" "}{new Date().getFullYear()}
          {` | `}
          Built with <a href="https://www.nextjs.org">Next.js</a>
          {` | `}
          <a href="https://github.com/Austionian/blog.r00ks">
            Source Code
          </a>
        </footer>
      </div>
    </>
  )
}

export default Layout
