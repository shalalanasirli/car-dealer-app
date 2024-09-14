'use client';
import React, {useState} from 'react';
import Link from "next/link";

interface VehicleMake {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
}

const Main = ({makes}: { makes: VehicleMake[] }) => {
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMake, setSelectedMake] = useState("");


    const currentYear = new Date().getFullYear();
    const modelYears = Array.from({length: currentYear - 2014}, (_, i) => 2015 + i);

    return (
        <div className="flex gap-6 py-4">
            <div>
                <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700">Vehicle Make</label>
                    <select id="make" name="make" value={selectedMake} onChange={(v) => setSelectedMake(v.target.value)}
                            className="mt-1 border border-gray-300 rounded-md py-2 px-3">
                        <option value="">Select make</option>
                        {makes.map((make: VehicleMake) => (
                            <option key={make.MakeId} value={make.MakeId}>{make.MakeName}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700">Vehicle Year</label>
                    <select id="make" name="make" value={selectedYear} onChange={(v) => setSelectedYear(v.target.value)}
                            className="mt-1 border border-gray-300 rounded-md py-2 px-3">
                        <option value="">Select year</option>
                        {modelYears.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>
            <Link href={`/result/${selectedMake}/${selectedYear}`}
                  className="border border-gray-300 rounded px-5 py-2 place-self-end"
                  aria-disabled={!selectedYear || !selectedMake}>Next</Link>
        </div>
    );
};

export default Main;