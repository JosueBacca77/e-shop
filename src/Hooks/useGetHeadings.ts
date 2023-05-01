import { getFireStore } from "../Data";
import firebase from 'firebase/app';
import { HeadingInterface } from "../components/interfaces/Heading.interface";
import { useEffect, useState } from "react";
import { FirebaseDocumentInterface } from "../components/interfaces/FirebaseDocument.interface";


const useGetHeadings=()=>{
  const db = getFireStore()

  const [headings, setHeadings] = useState<FirebaseDocumentInterface<HeadingInterface>[]>([])

    const getHeadings = (): void => {
        db.collection('Headings')
          .get()
          .then((heads: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
            const arr: FirebaseDocumentInterface<HeadingInterface>[] = [];
            heads.forEach((head: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) => {
              arr.push({
                id: head.id,
                data: head.data() as HeadingInterface // assuming HeadingData is the interface for head.data()
              })
            })
            setHeadings(arr);
          })
          .catch((error: Error) => console.log(`Error in headings searching, ${error}`))
      }

    useEffect(() => {
        getHeadings()
    },[]);

    return { headings }
}

export default useGetHeadings;