import React, { FC, ReactNode } from 'react'
import { fetchVehiclesByYear } from '@/src/app/api/fetchVehiclesByYear'
import { fetchVehicleMakes } from '@/src/app/api/fetchVehicleMakes'
import Link from 'next/link'
import { IMake, IModel } from '@/src/types'
import { getYears } from '@/src/utils'
import { notFound } from 'next/navigation'

export const dynamicParams = false

interface IKeyValueProps {
    label: string
    value: ReactNode
}

const KeyValue: FC<IKeyValueProps> = ({ label, value }) => {
    return (
        <div className={'flex gap-2 text-sm'}>
            <div className={'font-semibold'}>{label}:</div>
            <div>{value}</div>
        </div>
    )
}

interface IParams {
    params: {
        makeId: string
        year: string
    }
}

export async function generateStaticParams() {
    const makes = await fetchVehicleMakes()

    return makes.reduce((prev: IParams[], make: IMake) => {
        return [
            ...prev,
            ...getYears().map((year) => ({
                params: {
                    makeId: make.MakeId.toString(),
                    year: year.toString(),
                },
            })),
        ]
    }, [])
}

async function Page({ params }: IParams) {
    const { makeId, year } = params
    const models = await fetchVehiclesByYear(makeId, year)

    if (!models.Results) {
        return notFound()
    }

    return (
        <div>
            {models.Count > 0 ? (
                models.Results.map((m: IModel) => (
                    <div
                        key={m.Model_ID}
                        className={
                            'flex flex-col gap border-b border-b-gray-200 last-of-type:border-b-0 py-2'
                        }
                    >
                        <KeyValue label={'Make ID'} value={m.Make_ID} />
                        <KeyValue label={'Make Name'} value={m.Make_Name} />
                        <KeyValue label={'Model ID'} value={m.Model_ID} />
                        <KeyValue label={'Model Name'} value={m.Model_Name} />
                    </div>
                ))
            ) : (
                <div className="flex flex-col items-center justify-center gap-4 absolute inset-0">
                    <h1 className="text-4xl font-bold">
                        Not model found of this make
                    </h1>
                    <Link href={'/'} className={'button'}>
                        Go back to home
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Page
