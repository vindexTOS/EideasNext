
import Image from "next/image";
import React from "react";
import Faq1Data from "@/assets/jsonData/faq/Faq1Data.json";
import SingleFaq1 from "../faq/SingleFaq1";
import Link from "next/link";
import handleSmoothScroll from "../utilities/handleSmoothScroll";

const ServiceDetailsContent = ({ serviceInfo }) => {
  const {
    thumbFull,
    title,
    icon,
    whatDoWeDo,
    text,
    serviceListTitle,
    serviceList,
    subDescription,
    subInfo,
  } = serviceInfo;

  return (
    <>
      <div className="services-details-area overflow-hidden default-padding">
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                <div className="thumb">
                  <Image
                    src={`/assets/img/service/${thumbFull}`}
                    alt="Thumb"
                    width={1460}
                    height={782}
                  />
                </div>
                <h2>{title}</h2>
                <p>{whatDoWeDo}</p>
                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                  <div className="row">
                    <div className="  w-[100%]">
                      <div className="content">
                        <h3>{serviceListTitle}</h3>
                        <ul className="feature-list-item">
                          {serviceList.map((tit, i) => (
                            <li key={i}>{tit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <p>{subDescription} </p>
              </div>

              <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                <div className="single-widget services-list-widget">
                  <h4 className="widget-title">სხვა სერვისები</h4>
                  <div className="content">
                    <ul>
                      <li className={title == "IoT" && "current-item"}>
                        <Link href="/services-details/1">IoT სისტემები</Link>
                      </li>
                      <li className={title == "PCB დიზაინი" && "current-item"}>
                        <Link href="/services-details/2">PCB  დიზაინი</Link>
                      </li>
                      <li
                        className={
                          title == "Hardware ინჟინერია" && "current-item"
                        }
                      >
                        <Link href="/services-details/3">
                          Hardware მოწყობილობები
                        </Link>
                      </li>
                      <li
                        className={
                          title == "სისტემების აუტომიზაცია" && "current-item"
                        }
                      >
                        <Link href="/services-details/4">
                          ავტომატიზირებული სისტემა
                        </Link>
                      </li>
                      {/* <li><Link href="#">Social Media Marketing</Link></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* devices */}
        <section
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display:'flex',
            marginTop:"10rem"
          }}
        >
          <div style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
            <h3 className="mb-30">მეტი ინფორმაცია</h3>
            <div
              style={{
                display: "flex",
                  
                flexDirection: "column",
              
                gap: "50px",
             
              }}
             
              id="faqAccordion"
            >
              {subInfo.map((val, i) => (
                <div key={i} style={{ display: "flex"  ,flexDirection:val.bool   ? "column"  :"row" , alignItems:val.bool ? 'center' : "", flexWrap:"wrap", padding:"20px"}}>
                  
                  <img
                    style={{ width:val.bool? "90%" : "400px", height:val.bool? "auto" : "300px" }}
                    src={`/assets/img/service/${val.img}`}
                  />
                  <p style={{padding:"40px"}}>{val.title}</p>
                
                  <div>
                    <p>{val.name}</p>
                   {val.info.length > 1 && <ul className="feature-list-item">
                      {val.info.map((l, index) => (
                        <li key={index}>{l}</li>
                      ))}
                    </ul>}
                  </div>
                </div>
              ))}
            </div>
          </div> 
        </section>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
