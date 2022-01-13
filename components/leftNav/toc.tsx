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


// const Table_of_Contents = ({ }) => {
//     let headingsArray = [];

//     if (typeof window !== 'undefined') {
//         const titles = document.querySelectorAll('h2, h3, h4, h5, h6');
//         headingsArray = Array.prototype.slice
//             .call(titles)
//             .map(title => ({ id: title.id, title: title.innerText })) as Array<{
//                 id: string;
//                 title: string;
//             }>;

//         const start = () => {
//             scrollSpy(headingsArray);
//         };
    
//         const getPosition = (element) => {
//             let valuesArr = [];
//             for (let i = 0; i < element.length; i++) {
//                 let yPosition = 0;
//                 yPosition += element[i].offsetTop - element[i].scrollTop + element[i].clientTop;
//                 valuesArr.push(yPosition - window.scrollY);
//             }
//             return valuesArr;
//         }
    
//         const removeClasses = () => {
//             const els = document.getElementsByClassName("active");
//             if (els[0]) {
//               els[0].classList.remove("active");
//             }
//         };
    
//         const navList = document.getElementsByClassName("toc-a");
//         const scrollSpy = (headings) => {
//             let x = getPosition(headings);
//             for (let i = 0; i < headings.length; i++) {
//                 removeClasses();
//                 if (x[i] <= 100 && (x[i + 1] > 100 || i + 1 === headings.length)) {
//                     navList[i].classList.add("active");
//                     return;
//                 }
//             }
//         };
    
//         window.addEventListener("scroll", _.debounce(start, 5));
//         window.onload = start();
//     }

//     if (headingsArray.length > 0) {
//         return (
//             <nav className="table-of-contents">
//                 <ul>
//                     {headingsArray.map(heading => (
//                         <Link key={heading.title + '-anchor'} href={`#${heading.id}`}>
//                             <a className={'toc-a'}>
//                                 <li key={heading.title} className={`toc-item`}>
//                                     {heading.title}
//                                 </li>
//                             </a>
//                         </Link>
//                     ))}
//                 </ul>
//             </nav>
//         )
//     }
//     return null;
// }