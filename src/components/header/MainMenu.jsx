import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="/" className="  active" data-toggle="dropdown" onClick={toggleSubMenu}>მთავარი</Link>
                   
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>სერვისები</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">სერვისების შესახებ</Link></li>
                        <li><Link href="/services-2">მოწყობილობები</Link></li>
                         
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>ჩვენს შესახებ</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">ჩვენი გუნდი</Link></li>
        
                        <li><Link href="/services">ბლოგი</Link></li>
                        <li><Link href="/services">კონტაქტი</Link></li>


                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;