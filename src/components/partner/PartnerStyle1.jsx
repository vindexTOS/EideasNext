import React from 'react';
import logo1 from '@/assets/img/logo/newtelco.png'
import logo2 from '@/assets/img/logo/Gotge.png'

import logo4 from '@/assets/img/logo/logo-en.png'
import logo5 from '@/assets/img/logo/Baristo.png'
import logo6 from '@/assets/img/logo/6.png'
import logo7 from '@/assets/img/logo/7.png'
import Image from 'next/image';

const PartnerStyle1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`partner-style-one-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="partner-map" style={{ backgroundImage: `url(/assets/img/shape/map.png)` }}>
                                <h2 className="mask-text" style={{  }}>80</h2>
                                <h4>ჩვენ გვენდობიან</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="partner-items">
                                <ul>
                                    <li><Image src={logo1} alt="Image Not FOund" /></li>
                                    <li><Image src={logo2} style={{backgroundColor:"black", padding:"0.5rem"}}  alt="Image Not FOund" /></li>
                               
                                    <li><Image src={logo4} style={{backgroundColor:"black", padding:"0.5rem"}} alt="Image Not FOund" /></li>
                                    <li><Image src={logo5} alt="Image Not FOund" /></li>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerStyle1;