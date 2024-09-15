export const fetchVehiclesByYear = async (makeId: string, year: string) => {
    return await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    ).then((res) => res.json())
}
