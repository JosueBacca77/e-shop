import {useLayoutEffect} from "react";
import {CircularIndeterminate} from "../General/Progress/Progress";
import {useParams} from 'react-router-dom'
import ArticleList from "../ArticleList";
import ErrorPage from "../General/ErrorPage/ErrorPage";
import {errorStrings} from "../General/constants/strings";
import './../../General.css'
import { useArticleFilter } from "../../ArticleFilterContext";
import { RouteParams } from "../interfaces/RouteParams.interface";
import useGetArticlesByName from "../../Hooks/useGetArticlesByName";


const Heading =()=> {

    const {name} = useParams<RouteParams>();
    const {filter} = useArticleFilter()
    const {articles} = useGetArticlesByName(filter,{field:'heading',value:name});

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className='main-view'>
            {articles.length>0
                ?
                <ArticleList
                    articles={articles}
                    title={name}
                />
                :
                <>
                    {
                        filter.length>0
                        ?
                        <ErrorPage text={errorStrings.headingArticlesNotFound}/>

                        :
                        <CircularIndeterminate />
                    }
                </>
            }
        </div>
    )
}

export default Heading;