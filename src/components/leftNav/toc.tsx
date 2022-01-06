import React from "react"
import { Link } from "gatsby"
import _ from "lodash";

declare const window: any;

const Table_of_Contents = ({ headings }) => {
    if (typeof window !== 'undefined') {
        const start = () => {
            scrollSpy(document.querySelectorAll('h2, h3, h4, h5, h6'));
        };
    
        const getPosition = (element) => {
            let valuesArr = [];
            for (let i = 0; i < element.length; i++) {
                let yPosition = 0;
                yPosition += element[i].offsetTop - element[i].scrollTop + element[i].clientTop;
                valuesArr.push(yPosition - window.scrollY);
            }
            return valuesArr;
        }
    
        const removeClasses = () => {
            const els = document.getElementsByClassName("active");
            if (els[0]) {
              els[0].classList.remove("active");
            }
        };
    
        const navList = document.getElementsByClassName("toc-a");
        const scrollSpy = (headings) => {
            let x = getPosition(headings);
            for (let i = 0; i < headings.length; i++) {
                removeClasses();
                if (x[i] <= 100 && (x[i + 1] > 100 || i + 1 === headings.length)) {
                    navList[i].classList.add("active");
                    return;
                }
            }
        };
    
        window.addEventListener("scroll", _.debounce(start, 5));
        window.onload = start();
    }

    if (headings.length > 0) {
        return (
            <nav className="table-of-contents">
                <ul>
                    {headings.map(heading => (
                        <Link className={'toc-a'} key={heading.value + '-anchor'} to={'#' + heading.value.toLowerCase().replace(/\s/g, '-').replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"")}>
                            <li key={heading.value} className={'toc-item'}>
                                {heading.value}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        )
    }
    return null;
}

export default Table_of_Contents