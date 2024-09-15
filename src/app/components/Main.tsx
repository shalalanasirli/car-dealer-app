'use client'
import React, { FC, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { IMake } from '@/src/types'
import { Select } from '@/src/app/components/Select'
import { getYears } from '@/src/utils'

interface IMainPageProps {
    makes: IMake[]
}

const Main: FC<IMainPageProps> = ({ makes }) => {
    const [selectedYear, setSelectedYear] = useState<string | number>('')
    const [selectedMake, setSelectedMake] = useState<string | number>('')

    return (
        <div className="flex flex-col gap-4">
            <div>
                <Select
                    labelText={'Select make'}
                    value={selectedMake}
                    options={[
                        {
                            value: '',
                            label: 'Select',
                        },
                        ...makes.map((m) => ({
                            value: m.MakeId,
                            label: m.MakeName,
                        })),
                    ]}
                    onChange={(m) => setSelectedMake(m)}
                />
            </div>
            <div>
                <Select
                    labelText={'Select year'}
                    value={selectedYear}
                    options={[
                        {
                            value: '',
                            label: 'Select',
                        },
                        ...getYears().map((year) => ({
                            value: year.toString(),
                            label: year.toString(),
                        })),
                    ]}
                    onChange={(y) => setSelectedYear(y)}
                />
            </div>
            <div>
                <Link
                    href={{
                        pathname: `result/${selectedMake}/${selectedYear}`,
                    }}
                    className={classNames('button', {
                        'button-disabled':
                            selectedMake === '' || selectedYear === '',
                    })}
                >
                    Next
                </Link>
            </div>
        </div>
    )
}

export default Main
