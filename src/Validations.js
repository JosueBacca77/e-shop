const validations={
    max_name:{ value: 50, message: "El valor debe ser menor a 50 caracteres" },
    max_dni:{ value: 8, message: "El valor debe contener hasta 8 dígitos" },
    min_dni:{ value: 7, message: "El valor debe contener 7 dígitos como mínimo" },
    req:{value:true,message:"Dato requerido"},
    email:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Formato de email incorrecto"},
    max_phone:{ value: 11, message: "El número no debe poseer más de 11 dígitos" },
}
export {validations};