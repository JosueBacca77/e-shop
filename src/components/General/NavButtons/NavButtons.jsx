import { AceptButton} from "../Buttons"
import "./NavButtons.css"


const NavButtons =({textBack, textNext, clickBack})=> { 
    return(
        <div className='navigate-steps'>
           
            <div className='back-button'>
                {
                    textBack !== ''
                    ?
                    <AceptButton text={textBack} width='100px' onClick={clickBack} type='button'/>
                    :
                    null
                }
            </div>
            
            <div className='next-button'>
                {
                    textNext !== ''
                    ?
                    <AceptButton text={textNext} width='100px' type='submit'/>
                    :
                    null
                }
            </div>
        </div>
    ) 
        
} 

export default NavButtons