import Main from '@/src/app/components/Main'
import { fetchVehicleMakes } from '@/src/app/api/fetchVehicleMakes'

export default async function Home() {
    const makes = await fetchVehicleMakes()

    return <Main makes={makes} />
}
