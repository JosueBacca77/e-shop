import {errorStrings} from "../General/constants/strings";

const ErrorStock =({articles})=>{

    return(
        <>
            <h1 className='subtitle'>
                {errorStrings.insufficientStock}
            </h1>
            <ul>
                {
                    articles.map(art=>(
                        <li key={art.id} >
                            <p className='error-item'>{art.data.name}</p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ErrorStock;