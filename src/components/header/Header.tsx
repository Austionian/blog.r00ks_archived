import * as React from "react"
import { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"

import ThemeToggle from "../toggle"


const Header = ({ title, location, sticky=false, className, ...rest }) => {
    const rootPath = `/`
    const isRootPath = location.pathname === rootPath
    let header
    let classes

    if (isRootPath) {
        classes = 'flex-content';
        header = (
            <h1 className="main-heading">
            <Link to="/">{title}</Link>
            </h1>
        )
    } else {
        classes = 'flex-content index-heading'
        header = (
            <Link className="header-link-home" to="/">
            {title}
            </Link>
        )
    }

    const [isSticky, setIsSticky] = useState(false)
    const ref = useRef()
    
    // mount 
    useEffect(()=>{
      const cachedRef = ref.current,
            observer = new IntersectionObserver(
              ([e]) => setIsSticky(e.intersectionRatio < 1),
              {
                threshold: [1],
                // rootMargin: '-1px 0px 0px 0px',  // alternativly, use this and set `top:0` in the CSS
              }
            )
  
      observer.observe(cachedRef)
      
      // unmount
      return function(){
        observer.unobserve(cachedRef)
      }
    }, [])

    return (
        <header className={className + (isSticky ? " isSticky" : "")} data-is-root-path={isRootPath} ref={ref} {...rest}>
            <div className={classes}>
                {header}
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header
