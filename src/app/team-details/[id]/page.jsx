import TeamDetailsContent from '@/components/team/TeamDetailsContent';
import React from 'react';
import TeamData from '@/assets/jsonData/team/TeamData.json';
 
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
 
 

export const metadata = {
    title: "Eideas Team Details"
}

const TeamDetails = ({ params }) => {

    const { id } = params
    const data = TeamData.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb={"Team-member/" + id} title={data.name} bannerImg='Team.jpg'>
                <TeamDetailsContent teamInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default TeamDetails;