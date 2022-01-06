import * as React from 'react'

import { ReadingProgress } from "@makotot/ghostui";
import Table_of_Contents from "./toc"

const LeftNav = ({post}) => {
  return (
    <div id='leftNav'>
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