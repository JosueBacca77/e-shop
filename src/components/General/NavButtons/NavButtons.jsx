import { AceptButton} from "../Buttons"


const NavButtons =({textBack, textNext, clickBack})=> { 
    return(
        <article className='space-between'>
           
            <div className='back-button'>
                {
                    textBack !== ''
                    ?
                    <AceptButton text={textBack} onClick={clickBack} type='button'/>
                    :
                    null
                }
            </div>
            
            <div className='next-button'>
                {
                    textNext !== ''
                    ?
                    <AceptButton text={textNext} type='submit'/>
                    :
                    null
                }
            </div>
        </article>
    ) 
        
} 

export default NavButtons