import TeamDetailsContent from '@/components/team/TeamDetailsContent';
import React from 'react';
import TeamData from '@/assets/jsonData/team/TeamData.json';
 
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
 
 

export const metadata = {
    title: "Eideas Team Details"
}

const TeamDetails = ({ params }) => {

    const { id } = params
    const data = TeamData.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutStyle1 breadCrumb="Team-details" title="Team Details">
                <TeamDetailsContent teamInfo={data} />
            </LayoutStyle1>
        </>
    );
};

export default TeamDetails;