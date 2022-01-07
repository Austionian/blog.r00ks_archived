import * as React from "react"
import { useState, useEffect } from "react"
import Toggle from 'react-toggle'

import { getTheme } from './theme'
import useIsClient from "./useIsClient"

const Moon = require('../assets/moon.svg');
const Sun = require('../assets/sun.svg');

const ThemeToggle = () => {
    const { isClient, key } = useIsClient();

    const [dark_theme, setDarkTheme] = useState(getTheme())

    useEffect(() => {
        if (dark_theme) {
          document.body.classList.add("dark");
          document.body.classList.remove("light");
          localStorage.setItem('theme', 'dark');
          document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0e1117');
        } else {
          document.body.classList.remove("dark");
          document.body.classList.add("light");
          localStorage.setItem('theme', 'light');
          document.querySelector('meta[name="theme-color"]').setAttribute("content", '#3164dc');
        }
    }, [dark_theme])

    if ( !isClient ) return null;
    return (
        <Toggle
            id="theme-toggle"
            icons={{
            checked: <Moon />,
            unchecked: <Sun />,
            }}
            defaultChecked={dark_theme}
            onChange={e => {
                e.target.checked ? setDarkTheme(true) : setDarkTheme(false)
            }}
            aria-label="Switch between Dark and Light mode"
        />
    )
};

export default ThemeToggle