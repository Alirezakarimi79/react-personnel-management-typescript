import React, { useState } from 'react';

interface IState {
  peoples: {
    id: number,
    fullName: string,
    age: number,
    img_url: string,
    bio?: string
  }[]
}

const App = () => {

  const [peoples, setPeoples] = useState<IState["peoples"]>([{
    id: 1,
    fullName: "علیرضا کریمی",
    age: 21,
    img_url: "../../public/assets/images/photo_2022-04-07_16-52-00.jpg",
    bio: "طراح و توسعه دهنده وب اپلیکیشن ها"
  }])


  return (
    <div>App</div>
  )
}

export default App