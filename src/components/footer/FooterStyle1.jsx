import Image from 'next/image';
import React from 'react';
import shape7 from '@/assets/img/shape/7.png';
import shape9 from '@/assets/img/shape/9.png';
import logoLight from '@/assets/img/logo.png';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="footer-shape">
                    <div className={`item ${shapeClass}`}>
                        {shape ? <Image src={shape} alt="Shape" /> : <Image src={shape7} alt="Shape" />}
                    </div>
                    <div className="item">
                        <Image src={shape9} alt="Shape" />
                    </div>
                </div>
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Link href="/">
                                        {logo ? <Image className="logo" src={logo} alt="Logo" /> : <Image className="logo" src={logoLight} alt="Logo" />}
                                    </Link>
                                    <p>
                                        ჩვენ გარდავქმნით თქვენს იდეას რეალობად
                                    </p>
                                    <div className="opening-hours">
                                        <h5>მუშაობის საათები</h5>
                                        <ul>
                                            <li>
                                                <div className="working-day">ორშაბათი - პარასკევი:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">10:00  – 18:00 სთ</div>
                                            </li>
                                            {/* <li>
                                                <div className="working-day">Sunday:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">Off Day</div>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">ჩვენი კომპანია</h4>
                                    <ul>
                                        <li>
                                            <Link href="/team">ჩვენი გუნდი</Link>
                                        </li>
                                     
                                        {/* <li>
                                            <Link href="/contact-us">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">Career</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">Plans & Pricing</Link>
                                        </li> */}
                                        <li>
                                            <Link href="/contact-us">კონტაქტი </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">სერვისები</h4>
                                    <ul>
                                    
                                        <li>
                                            <Link href="/services-details/1">IoT სისტემები</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/2">PCB დიზაინი</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/3">Hardware მოწყობილობები</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/4">აუტომიზაცია</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <h4 className="widget-title">სოციალური მედია</h4>
                                <p>
                                   გამოგვყევით სოციალურ მედიაზე
                                </p>
                                {/* <div className={`f-item newsletter ${formStyle}`}>
                                    <FooterNewsLetter />
                                </div> */}
                                <ul className="footer-social">
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="" target='_blank'>Eideas</a></p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    {/* <li>
                                        <Link href="/faq">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">Privacy</Link>
                                    </li> */}
                                    <li>
                                        <Link href="/contact-us">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;