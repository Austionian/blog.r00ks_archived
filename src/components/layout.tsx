import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

import ThemeToggle from "./toggle"

config.autoAddCss = false

const Layout = ({ location, title, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="index-heading">
          {header}
          <ThemeToggle />
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <FontAwesomeIcon icon={faCopyright} />{" "}{new Date().getFullYear()}
        {` | `}
        Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` | `}
        <a href="https://github.com">
          Source Code
        </a>
      </footer>
    </div>
  )
}

export default Layout
