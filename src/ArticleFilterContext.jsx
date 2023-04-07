import {createContext, useContext, useState} from 'react'

const ArticleFilterContext = createContext()

export function useArticleFilter(){
    return useContext(ArticleFilterContext)
}

export const ArticleFilter=({children})=>{

    const [filter, setFilter] = useState('')

    const value = {
        filter,
        setArticleFlter
    }

    function setArticleFlter(filter){
        return setFilter(filter)
    }
    
    return(
        <ArticleFilterContext.Provider value={value}>
            {children}
        </ArticleFilterContext.Provider>
    )
}