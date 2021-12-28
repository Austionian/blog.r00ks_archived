import * as React from "react"
import { Link } from "gatsby"
import Toggle from 'react-toggle'

import { getTheme, setTheme } from './theme'

const Moon = require('../assets/moon.svg');
const Sun = require('../assets/sun.svg');

const Layout = ({ location, title, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath
  let header

  let dark_theme = getTheme();

  if (dark_theme) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

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
          <Toggle
              icons={{
                checked: <Moon />,
                unchecked: <Sun />,
              }}
              defaultChecked = {dark_theme}
              onChange={e => {
                if (e.target.checked) {
                  document.body.classList.add("dark");
                  setTheme('dark');
                } else {
                  document.body.classList.remove("dark");
                  setTheme('light');
                }
              }}
            />
        </div>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
