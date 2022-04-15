import React, { FC } from 'react';

interface IStates {
    peoples: {
        id: number,
        fullName: string,
        age: number,
        img_url: string,
        bio?: string
    }[]
};

interface IProps {
    peoples: IStates["peoples"]
}

const List: FC<IProps> = ({ peoples }) => {

    const renderedList = (): JSX.Element[] => (
        peoples.map((people) => (
            <div className='col-12 col-lg-6'>
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
        <div>{renderedList()}</div>
    )
}

export default List