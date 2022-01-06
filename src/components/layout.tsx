import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

import Header from '../components/header/Header'

config.autoAddCss = false

const Layout = ({ location, title, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header className="global-header" title={title} />
      <main>
        {children}
      </main>
      <footer>
        <FontAwesomeIcon icon={faCopyright} />{" "}{new Date().getFullYear()}
        {` | `}
        Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` | `}
        <a href="https://github.com/Austionian/blog.r00ks">
          Source Code
        </a>
      </footer>
    </div>
  )
}

export default Layout
