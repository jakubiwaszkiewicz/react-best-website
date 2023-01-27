import React from 'react';
import './NavBar.css'
import { FaHome, FaProjectDiagram } from 'react-icons/fa'
import { BiPaperPlane } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsFileEarmarkSpreadsheetFill } from 'react-icons/bs'


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <FaHome className="icon"/>
                    <span>Strona Główna</span>
                </li>
                <li>
                    <FaProjectDiagram className="icon"/>
                    <span>Nasze projekty</span>
                </li>
                <li>
                    <BiPaperPlane className="icon"/>
                    <span>Best Symposium on Education</span>
                </li>
                <li>
                    <BsFileEarmarkSpreadsheetFill className="icon"/>
                    <span>Dołącz do nas!</span>
                </li>
                <li>
                    <BsFillTelephoneFill className="icon"/>
                    <span>Kontakt</span>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;