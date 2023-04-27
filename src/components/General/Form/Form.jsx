import './form.css'

const Form =({onSubmit, children})=>{

    return(
        <form
            className='form card' noValidate
            onSubmit={onSubmit}
        >   
            {children}
        </form>
    )
}

export default Form;