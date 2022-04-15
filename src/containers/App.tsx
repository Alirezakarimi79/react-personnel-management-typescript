import React, { useState } from 'react';

import List from '../components/List';
interface IStates {
  peoples: {
    id: number,
    fullName: string,
    age: number,
    img_url: string,
    bio?: string
  }[]
}

const App = () => {

  const [peoples, setPeoples] = useState<IStates["peoples"]>([{
    id: 1,
    fullName: "علیرضا کریمی",
    age: 21,
    img_url: "https://avatars.githubusercontent.com/u/87535227?v=4",
    bio: "طراح و توسعه دهنده وب اپلیکیشن ها"
  }])


  return (
    <div className='container'>
      <h2 className='alert alert-info'>مدیریت  کننده اشخاص</h2>
      <List peoples={peoples} />
    </div>
  )
}

export default App