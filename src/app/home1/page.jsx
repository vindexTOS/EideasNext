import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import AboutStyle1 from '@/components/about/AboutStyle1';
 
import BannerStyle1 from '@/components/banner/BannerStyle1';
import BlogStyle1 from '@/components/blog/BlogStyle1';
import ChooseStyle1 from '@/components/choose/ChooseStyle1';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import ProjectStyle1 from '@/components/project/ProjectStyle1';
import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import ServicesStyle1 from '@/components/services/ServicesStyle1';
import ServicesStyle2 from '@/components/services/ServicesStyle2';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Eideas"
}

const Home1 = () => {
    return (
        <>
            <LayoutStyle1>
                <BannerStyle1 />
                <AboutStyle1 />
                <ServicesStyle2 />
                {/* <ProcessStyle1 /> */}
                {/* <ChooseStyle1 /> */}
                <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />

                <PartnerStyle1 sectionClass="default-padding" />
                {/* <ProjectStyle1 /> */}
                {/* <RequestCallStyle1 /> */}
                {/* <TestimonialStyle1 /> */}
                {/* <BlogStyle1 sectionClass="bg-gray" /> */}
            </LayoutStyle1>
        </>
    );
};

export default Home1;