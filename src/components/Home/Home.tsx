import { useLayoutEffect } from "react";
import './Home.css'
import './../../General.css'
import {CircularIndeterminate} from "../General/Progress/Progress";
import ArticleList from "../ArticleList";
import {useArticleFilter} from "../../ArticleFilterContext";
import ErrorPage from "../General/ErrorPage/ErrorPage";
import { errorStrings } from "../General/constants/strings";
import useGetArticles from "../../Hooks/useGetArticles";


const Home =()=> {

    const {filter} = useArticleFilter()

    const {articles} = useGetArticles(filter);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className='main-view'>
            {articles.length>0
                ?
                <ArticleList
                    articles={articles.slice(0,8)}
                    title='Most searched'
                />
                :
                <>
                    {
                        filter.length>0
                        ?
                        <ErrorPage text={errorStrings.noMatchSearch}/>

                        :
                        <CircularIndeterminate />
                    }
                </>
                
            }
        </div>
    )
}

export default Home;