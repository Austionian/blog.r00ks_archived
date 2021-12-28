import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import Toggle from 'react-toggle'

import { getTheme, setTheme } from './theme'

const Moon = require('../assets/moon.svg');
const Sun = require('../assets/sun.svg');

const Layout = ({ location, title, children }) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath
  let header

  const [dark_theme, setDarkTheme] = useState(getTheme())

  useEffect(() => {
    if (dark_theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  })

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
              id="theme-toggle"
              icons={{
                checked: <Moon />,
                unchecked: <Sun />,
              }}
              defaultChecked={getTheme()}
              onChange={e => {
                if (e.target.checked && typeof window !== 'undefined') {
                  document.body.classList.add("dark");
                  setTheme('dark');
                  setDarkTheme(true);
                } else if (typeof window !== 'undefined') {
                  document.body.classList.remove("dark");
                  setTheme('light');
                  setDarkTheme(false);
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
