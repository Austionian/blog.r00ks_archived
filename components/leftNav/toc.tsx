import React from 'react'
import Link from 'next/link'
import _ from 'lodash';

import useScrollSpy from '../../lib/scrollSpy'

/**
 * This offset is meant for the smooth scrolling and
 * Scrollspy to take into account the header height
 */
const OFFSET = 150;

interface TableOfContentProps {
    ids: Array<{ id: string; title: string }>;
}

const Table_of_Contents = ({ ids }: TableOfContentProps) => {
    /**
     * Get the index of the current active section that needs
     * to have its corresponding title highlighted in the
     * table of content
     */
    const [currentActiveIndex] = useScrollSpy(
        ids.map(
            (item) => document.querySelector(`#${item.id}`).parentElement.closest('section')!
        ),
        { offset: OFFSET }
    );
  
    if (ids.length > 0 ) {
        return (
            <div className='table-of-contents'>
                <ul>
                    {ids.map((item, index) => {
                        return (
                            <Link href={`#${item.id}`} key={item.id}>
                                <a className={currentActiveIndex === index ? 'active toc-a' : 'toc-a'}>
                                    <li key={item.id} className={`toc-item`}>
                                        {item.title}
                                    </li>
                                </a>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    }
    return null;
}

export default Table_of_Contents
