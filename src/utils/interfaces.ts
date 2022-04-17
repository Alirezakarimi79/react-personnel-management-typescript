import { Dispatch, SetStateAction } from "react"

export interface IStates {
    peoples: {
      id: number,
      fullName: string,
      age: number,
      img_url: string,
      bio?: string
    }[],
    people:{
      id: number,
      fullName: string,
      age: number,
      img_url: string,
      bio?: string
    }
  }
  
  export interface IProps {
   listAndAdd:{
    peoples: IStates["peoples"],
     setPeoples: Dispatch<SetStateAction<IStates["peoples"]>>
   },
   edit:{
     people: IStates["people"],
     peoples: IStates["peoples"],
     setPeoples: Dispatch<SetStateAction<IStates["peoples"]>>
   }
  }