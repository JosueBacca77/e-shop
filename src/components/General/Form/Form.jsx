import './form.css'

const Form =({onSubmit, _width, children})=>{

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