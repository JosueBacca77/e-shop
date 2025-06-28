import { getFireStore } from "../Data";
import { collection, getDocs } from 'firebase/firestore';
import { HeadingInterface } from "../components/interfaces/Heading.interface";
import { useEffect, useState } from "react";
import { FirebaseDocumentInterface } from "../components/interfaces/FirebaseDocument.interface";


const useGetHeadings=()=>{
  const db = getFireStore()

  const [headings, setHeadings] = useState<FirebaseDocumentInterface<HeadingInterface>[]>([])

    const getHeadings = async (): Promise<void> => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Headings'));
            const arr: FirebaseDocumentInterface<HeadingInterface>[] = [];
            querySnapshot.forEach((doc) => {
              arr.push({
                id: doc.id,
                data: doc.data() as HeadingInterface
              })
            })
            setHeadings(arr);
        } catch (error) {
            console.log(`Error in headings searching, ${error}`);
        }
    }

    useEffect(() => {
        getHeadings()
    },[]);

    return { headings }
}

export default useGetHeadings;