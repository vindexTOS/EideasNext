import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ServiceDetailsContent from '@/components/services/ServiceDetailsContent';
import React from 'react';
import Services2Data from '@/assets/jsonData/services/Services2Data.json'
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import LayoutStyle2 from '@/components/Layouts/LayoutStyle2';

export const metadata = {
    title: "Eideas - Services Details"
}

const ServiceDetailsPage = ({ params }) => {

    const { id } = params
    const data = Services2Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutStyle2 breadCrumb="Service-details" title="Service Details">
                <ServiceDetailsContent serviceInfo={data} />
            </LayoutStyle2>
        </>
    );
};

export default ServiceDetailsPage;