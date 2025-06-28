import { getFireStore } from "../Data";
import { doc, getDoc } from 'firebase/firestore';
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

    const getArticles = async (id:string): Promise<void> => {
        try {
            const docRef = doc(db, 'Articles', id);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              setArticle({
                  id: docSnap.id,
                  data: docSnap.data() as ArticleInterface
              });
            } else {
              setArticle(null)
            }  
            setIsLoading(false);
        } catch (error) {
            console.log(`Error in products searching: ${error}`)
            setIsLoading(false);
        }
    }

    useEffect(() => {
      getArticles(id)
    },[]);

    return { article, isLoading }
}

export default useGetArticlesById;