const GetPlural =(unit)=> {
    switch (unit) {
        case "unidad": return  "unidades"
        case "par":  return "pares"
        case "metro": return  "metros"
        default : return ""
    }
}

export default GetPlural;