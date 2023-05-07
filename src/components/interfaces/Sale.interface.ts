import {CartArticleInterface} from "./CartArticle.interface"

export interface SaleInterface {
    card_number: string,
    confemail: string,
    countFees: number,
    date: number,
    email: string,
    fee: string,
    iduser: string
    items: CartArticleInterface[],
    name:string,
    phone:string,
    state: string,
    surname: string,
    total: string
}