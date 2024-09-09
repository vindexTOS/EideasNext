import Image from 'next/image';
import React from 'react';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json';
import SingleFaq1 from '../faq/SingleFaq1';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const ServiceDetailsContent = ({ serviceInfo }) => {
    const { thumbFull, title,icon, whatDoWeDo,text, serviceListTitle,serviceList, subDescription } = serviceInfo

    return (
        <>
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="thumb">
                                    <Image src={`/assets/img/service/${thumbFull}`} alt="Thumb" width={1460} height={782} />
                                </div>
                                <h2>{title}</h2>
                                <p>
                                    {whatDoWeDo}
                                 </p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="  w-[100%]">
                                            <div className="content">
                                                <h3>{serviceListTitle}</h3>
                                                <ul className="feature-list-item">
                                                   {serviceList.map((tit)=> <li>{tit}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challange</h3>
                                                <p>
                                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus.
                                                </p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                 
                                <p>
{subDescription }                                </p>

                                <div className="faq-style-one dark mt-40">
                                    <h3 className="mb-30">Common Question for this project</h3>
                                    <div className="accordion" id="faqAccordion">
                                        {Faq1Data.slice(0, 3).map(faq =>
                                            <SingleFaq1 faq={faq} key={faq.id} />
                                        )}
                                    </div>
                                </div>

                                <div className="services-more mt-40">
                                    <h2>Popular Services</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-personal"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>Investment Planning</Link></h4>
                                                <p>
                                                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-career"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>Markets Research</Link></h4>
                                                <p>
                                                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget services-list-widget">
                                    <h4 className="widget-title">სხვა სერვისები</h4>
                                    <div className="content">
                                        <ul>
                                            <li className={ title == "IoT" && "current-item"}>  <Link href="/services-details/1">IoT სისტემები</Link></li>
                                            <li className={ title == "PCB დიზაინი" && "current-item"}><Link href="/services-details/2">PCB დიზაინი</Link></li>
                                            <li className={ title == "Hardware ინჟინერია" && "current-item"}><Link href="/services-details/3">Hardware მოწყობილობები</Link></li>
                                            <li className={ title == "სისტემების აუტომიზაცია" && "current-item"}><Link href="/services-details/4">ავტომატიზირებული სისტემა</Link></li>
                                            {/* <li><Link href="#">Social Media Marketing</Link></li> */}
                                        </ul>
                                    </div>
                                </div>

                                {/* <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}>
                                    <div className="content">
                                        <h3>Need Help?</h3>
                                        <p>
                                            Speak with a human to filling out a form? call corporate office and we will connect you with a team member help.
                                        </p>
                                        <h2><a href="tel:+(012) 6679545">+(012) 6679545</a></h2>
                                        <h4><a href="mailto:info@digital.com">info@digital.com</a></h4>
                                        <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">Contact Us</Link>
                                    </div>
                                </div> */}

                                <div className="single-widget widget-brochure">
                                    {/* <h4 className="widget-title">Brochure</h4> */}
                                    {/* <ul>
                                        <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Download Brochure </Link></li>
                                        <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Company Details </Link></li>
                                    </ul> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;