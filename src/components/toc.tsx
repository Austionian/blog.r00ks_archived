import React from "react"
import { Link } from "gatsby"

const Table_of_Contents = ({ headings }) => (
    <div className="table-of-contents">
    <h4>Table of Contents</h4>
    <ul>
        {headings.map(heading => (
            <Link className={'toc-a'} key={heading.value + '-anchor'} to={'#' + heading.value.toLowerCase().replace(/\s/g, '-').replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"")}>
                <li key={heading.value} className={'toc-item toc-' + heading.depth}>
                    {heading.value}
                </li>
            </Link>
        ))}
    </ul>
    </div>
)

export default Table_of_Contents