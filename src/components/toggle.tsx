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
          localStorage.setItem('theme', 'dark');
        } else {
          document.body.classList.remove("dark");
          localStorage.setItem('theme', 'light');
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