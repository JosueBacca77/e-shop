import { AceptButton, BlueButton } from "../Buttons"


const NavButtons =({textBack, textNext, clickBack, clickNext, type=''})=> { 
    return(
        <article className='space-between'>
           
            <div className='back-button'>
                {
                    textBack !== ''
                    ?
                    <AceptButton text={textBack} onClick={clickBack}/>
                    :
                    null
                }
            </div>
            
            <div className='next-button'>
                {
                    textNext !== ''
                    ?
                    <AceptButton text={textNext} onClick={clickNext} type={type}/>
                    :
                    null
                }
            </div>
        </article>
    ) 
        
} 

export default NavButtons