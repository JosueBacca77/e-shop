export interface ArticleInterface {
    id:string,
    data:{
        description:string,
        heading:string,
        images:string[],
        name:string,
        price:number,
        stock:number,
        unit:string
    }
}