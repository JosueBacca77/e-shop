import { getFireStore } from "../Data";
import firebase from 'firebase/app';
import { useEffect, useState } from "react";
import { FirebaseDocumentInterface } from "../components/interfaces/FirebaseDocument.interface";
import { ArticleInterface } from "../components/interfaces/Article.interface";

type useGetArticlesTypes = {
  filter:string
}

type useGetArticlesReturnType = {
  articles: FirebaseDocumentInterface<ArticleInterface>[];
};

const useGetArticles=({filter=''}:useGetArticlesTypes): useGetArticlesReturnType=>{
  const db = getFireStore()

  const [articles, setArticles] = useState<FirebaseDocumentInterface<ArticleInterface>[]>([])

    const getArticles = (filter:string): void => {
        db.collection('Articles')
          .get()
          .then((arts: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
            const arr:FirebaseDocumentInterface<ArticleInterface>[] = [];
            arts.forEach((art: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) => {
              if (filter.length>0){
                    if (art.data().name.toLowerCase().includes(filter.toLowerCase())){
                        arr.push({
                            id: art.id,
                            data: art.data() as ArticleInterface
                        })
                    }
              }else{
                      arr.push({
                      id: art.id,
                      data: art.data() as ArticleInterface
                  })
              }
            })
            setArticles(arr);
          })
          .catch((error: Error) => console.log(`Error in products searching: ${error}`))
      }

    useEffect(() => {
      getArticles(filter)
    },[]);

    return { articles }
}

export default useGetArticles;