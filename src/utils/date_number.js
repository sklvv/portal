import moment from 'moment';
import "moment/locale/ru";



export const dateFormat = (date)=> {
    return moment(date).format("LL")
}

export const formatAmountRU = (item) => {
    let x = Math.round(item)
    return new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(x);
}