import { getFireStore } from "../Data";
import firebase from 'firebase/app';
import { HeadingInterface } from "../components/interfaces/Heading.interface";
import { HeadingDataInterface } from "../components/interfaces/HeadingData.interface";
import { useEffect, useState } from "react";


const useGetHeadings=()=>{
  const db = getFireStore()

  const [headings, setHeadings] = useState<HeadingInterface[]>([])

    const getHeadings = (): void => {
        db.collection('Headings')
          .get()
          .then((heads: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
            const arr: HeadingInterface[] = [];
            heads.forEach((head: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) => {
              arr.push({
                id: head.id,
                data: head.data() as HeadingDataInterface // assuming HeadingData is the interface for head.data()
              })
            })
            setHeadings(arr);
          })
          .catch((error: Error) => console.log(`Error en la búsqueda de rubros, ${error}`))
      }

    useEffect(() => {
        getHeadings()
    },[]);

    return { headings }
}

export default useGetHeadings;