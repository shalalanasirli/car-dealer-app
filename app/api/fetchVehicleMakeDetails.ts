export const fetchVehicleMakeDetails = async (makeId: string, year: string) => {
    const details = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
        .then((res) => res.json());
    return details;
}