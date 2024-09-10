import LayoutStyle2 from '@/components/Layouts/LayoutStyle2';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ServicesStyle2 from '@/components/services/ServicesStyle2';
 
import React from 'react';

export const metadata = {
    title: "Eideas Business - Services"
}

const ServicesPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="services" title="Our Services" bannerImg="Services.jpg" >
            <ServicesStyle2 />
                {/* <ServicesStyle1 />
                <ProcessStyle1 />
                <PartnerStyle1 sectionClass="default-padding bg-gray" />
                <TeamStyle1 teamTitle={true} />
                <RequestCallStyle1 />
                <PriceStyle1 priceTitle={true} sectionClass="primary" /> */}
            </LayoutStyle7>
        </>
    );
};

export default ServicesPage;