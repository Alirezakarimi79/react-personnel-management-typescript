import React, { FC } from 'react';
import { AiOutlineUserDelete } from "react-icons/ai";

import { IProps, IStates } from '../utils/interfaces';

const List: FC<IProps["listAndAddPeoples"]> = ({ peoples, setPeoples }) => {

    const handleDeletePeoples = (id: number): void => {
        const persons: IStates["peoples"] = [...peoples];
        const filteredPeoples = persons.filter((people) => people.id !== id);
        setPeoples(filteredPeoples);
    }

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
                    <div className='operation_btns'>
                        <AiOutlineUserDelete className='text-danger m-1' size={30} onClick={() => handleDeletePeoples(people.id)} />
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