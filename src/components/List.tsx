import React, { FC } from 'react';

import { IProps } from '../utils/interfaces';

const List: FC<IProps["list"]> = ({ peoples }) => {

    const renderedList = (): JSX.Element[] => (
        peoples.map((people) => (
            <div key={people.id} className='col-12 col-lg-6 mb-2'>
                <div className='card'>
                    <div className='card-body d-flex align-items-center'>
                        <img className='img-fluid rounded img-thumbnail' width={100} height={100} src={people.img_url} alt={people.fullName} />
                        <div className='me-3'>
                            <p>
                                <span className='h2'>{people.fullName}</span>
                                <span className='badge bg-info me-3'>{people.age} سال</span>
                            </p>
                            <p className='text-muted'>{people.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )


    return (
        <div className='row'>{renderedList()}</div>
    )
}

export default List