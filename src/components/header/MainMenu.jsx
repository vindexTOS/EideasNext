import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="/" className="  active"  >მთავარი</Link>
                   
                </li>
                <li className="dropdown">
                    <Link href="/services"     >სერვისები</Link>
                    
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>ჩვენს შესახებ</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/team">ჩვენი გუნდი</Link></li>
        
                        <li><Link href="/services">ბლოგი</Link></li>
                        <li><Link href="/services">კონტაქტი</Link></li>


                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;