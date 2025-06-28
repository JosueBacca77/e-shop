import { getFireStore } from "../Data";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { FirebaseDocumentInterface } from "../components/interfaces/FirebaseDocument.interface";
import { ArticleInterface } from "../components/interfaces/Article.interface";
import { FirebaseGetWhereClosureInterface } from "../components/interfaces/FirebaseGetWhereClousure.interface";


type useGetArticlesByNameReturnType = {
  articles: FirebaseDocumentInterface<ArticleInterface>[];
};

const useGetArticlesByName=(filter:string, whereClousure?:FirebaseGetWhereClosureInterface) :useGetArticlesByNameReturnType=>{
  const db = getFireStore()

  const [articles, setArticles] = useState<FirebaseDocumentInterface<ArticleInterface>[]>([])

    const getArticles = async (filter:string, whereClousure: FirebaseGetWhereClosureInterface | undefined): Promise<void> => {
      try {
        const articlesRef = collection(db, 'Articles');
        const q = whereClousure
          ? query(articlesRef, where(whereClousure.field, '==', whereClousure.value))
          : query(articlesRef);
    
        const querySnapshot = await getDocs(q);
        const arr:FirebaseDocumentInterface<ArticleInterface>[] = [];
        querySnapshot.forEach((doc) => {
          if (filter.length>0){
                if (doc.data().name.toLowerCase().includes(filter.toLowerCase())){
                    arr.push({
                        id: doc.id,
                        data: doc.data() as ArticleInterface
                    })
                }
          }else{
                  arr.push({
                  id: doc.id,
                  data: doc.data() as ArticleInterface
              })
          }
        })
        setArticles(arr);
      } catch (error) {
        console.log(`Error in products searching: ${error}`)
      }
    }

    useEffect(() => {
      getArticles(filter, whereClousure)
    },[filter, whereClousure?.field, whereClousure?.value]);

    return { articles }
}

export default useGetArticlesByName;