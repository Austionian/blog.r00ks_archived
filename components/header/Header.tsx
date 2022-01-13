import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

import ThemeToggle from '../toggle'


const Header = ({ title, location, sticky=false, className, ...rest }) => {
    const rootPath = `/`
    const isRootPath = location === rootPath
    let header
    let classes

    if (isRootPath) {
        classes = 'flex-content';
        header = (
            <h1 className="main-heading">
              <Link href="/"><a>{title}</a></Link>
            </h1>
        )
    } else {
        classes = 'flex-content index-heading'
        header = (
            <Link href="/">
              <a className="header-link-home">{title}</a>
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
