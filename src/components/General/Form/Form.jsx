import './form.css'

const Form =({onSubmit, _width, children})=>{

    return(
        <form
            className='form' noValidate
            onSubmit={onSubmit}
        >   
            {children}
        </form>
    )
}

export default Form;