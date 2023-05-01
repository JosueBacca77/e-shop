import { getFireStore } from "../Data";
import firebase from 'firebase/app';
import { useEffect, useState } from "react";
import { FirebaseDocumentInterface } from "../components/interfaces/FirebaseDocument.interface";
import { ArticleInterface } from "../components/interfaces/Article.interface";

type useGetArticlesByIdTypes = {
  id:string
}

type useGetArticlesByIdReturnType = {
  article: FirebaseDocumentInterface<ArticleInterface> | null;
  isLoading:boolean
};

const useGetArticlesById=({id=''}:useGetArticlesByIdTypes): useGetArticlesByIdReturnType=>{
  const db = getFireStore()

  const [article, setArticle] = useState<FirebaseDocumentInterface<ArticleInterface> | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true);


    const getArticles = (id:string): void => {
        db.collection('Articles')
          .doc(id)
          .get()
          .then((doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => {            
            if (doc.exists) {
              setArticle(
                  {
                      id: doc.id,
                      data: doc.data() as ArticleInterface
                  }
              );
          } else {
            console.log('ENTRA ELS')
              setArticle(null)
          }  
          setIsLoading(false);

        })
        .catch((error: Error) => {
            console.log(`Error in products searching: ${error}`)
            setIsLoading(false);
        })
      }

    useEffect(() => {
      getArticles(id)
    },[]);

    return { article, isLoading }
}

export default useGetArticlesById;