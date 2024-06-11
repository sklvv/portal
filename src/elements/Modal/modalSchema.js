import * as yup from "yup"

const txt ={
    min: "Минимальная длинна 3 цифры",
    max: "Минимальная длинна 11 цифр",
    match: "Пароли не совпадают",
    login: "Некорректный адрес электронной почты"
}

export const phoneBookSchema = yup.object().shape({
    name: yup.string()
        .required("Укажите имя"),
    position: yup.string(),
    dep: yup.string(),
    phone: yup.string()
        .required("Введите номер")
        .min(3, txt.min)
        .max(11, txt.max),
});
export const transportSchema = yup.object().shape({
    name: yup.string(),
    car: yup.string(),
    number: yup.string(),
    phone: yup.string()
        .required("Введите номер")
        .min(3, txt.min)
        .max(11, txt.max),
});

