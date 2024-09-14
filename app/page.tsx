import Main from "@/app/components/Main";
import {fetchVehicleMakes} from "@/app/api/fetchVehicleMakes";

export default async function Home() {
    const makes = await fetchVehicleMakes();

    return (
        <div className="lg:container mx-auto">
            <Main makes={makes}/>
        </div>
    );
}
