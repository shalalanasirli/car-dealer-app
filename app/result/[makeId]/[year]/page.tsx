import React from 'react';
import {fetchVehicleMakeDetails} from "@/app/api/fetchVehicleMakeDetails";

export async function generateStaticParams(){
    return [
        {
            makeId: '449',
            year: '2018'
        },
        {
            makeId: '449',
            year: '2019'
        }
    ];
}

async function Page(props: {params: {makeId: string, year: string}}) {
    const details = await fetchVehicleMakeDetails(props.params.makeId, props.params.year);

    return (
        <div>
            2nd
            <pre>{JSON.stringify(props)}</pre>
            <pre>{JSON.stringify(details)}</pre>
        </div>
    );
};

export default Page;