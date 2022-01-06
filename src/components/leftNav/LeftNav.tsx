import * as React from 'react'
import { useRef, useEffect, useState } from "react"

import { ReadingProgress } from "@makotot/ghostui";
import Table_of_Contents from "./toc"

const LeftNav = ({ post, sticky=false, ...rest }) => {
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
    <div className={"leftNav" + (isSticky ? " isSticky" : "")} ref={ref} {...rest}>
        <ReadingProgress>
            {({ value }) => (
            <div
                className="progress-bar-container"
            >
                <progress
                id="reading-progress"
                value={value}
                max={100}
                className="progress-bar"
                />
            </div>
            )}
        </ReadingProgress>
        <Table_of_Contents headings={post.headings} />
    </div>
  )
}
export default LeftNav;