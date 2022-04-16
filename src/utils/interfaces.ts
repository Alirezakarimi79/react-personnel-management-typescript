import { Dispatch, SetStateAction } from "react"

export interface IStates {
    peoples: {
      id: number,
      fullName: string,
      age: number,
      img_url: string,
      bio?: string
    }[]
  }
  
  export interface IProps {
   listAndAddPeoples:{
    peoples: IStates["peoples"],
     setPeoples: Dispatch<SetStateAction<IStates["peoples"]>>
   }
  }