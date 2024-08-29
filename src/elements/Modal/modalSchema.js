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
    org: yup.string(),
    phone: yup.string()
        .required("Введите номер")
        .min(3, txt.min)
        .max(12, txt.max),
});
export const transportSchema = yup.object().shape({
    name: yup.string(),
    car: yup.string(),
    carmodel: yup.string(),
    number: yup.string(),
    phone: yup.string()
        .required("Введите номер")
        .min(3, txt.min)
});
export const userSchema = yup.object().shape({
    name: yup.string().required("Укажите имя"),
    login: yup.string().required("Укажите имя"),
    position: yup.string(),
    dashboard: yup.boolean(),
    iboard: yup.boolean(),
    portal: yup.boolean(),
});
export const LicenceSchema = yup.object().shape({
    org: yup.string().required("Укажите организацию"),
    seller: yup.string(),
    vendor: yup.string().required("Укажите вендора"),
    lic: yup.string(),
    key: yup.string().required("Укажите ключ продукта"),
    start: yup.string(),
    exp: yup.string(),
    info: yup.string(),
    notes: yup.string(),
    amount: yup.string(),
});
export const IPtablesSchema = yup.object().shape({
    ip: yup.string().required("Укажите IP адрес"),
    type: yup.string().required("Укажите тип оборудования"),
    name: yup.string().required("Укажите имя"),
    info: yup.string(),
});
export const HardwareSchema = yup.object().shape({
    name: yup.string().required("Укажите наименование адрес"),
    type: yup.string().required("Укажите тип оборудования"),
    price: yup.string(),
    inventory: yup.string(),
    factory: yup.string(),
    date: yup.string(),
    note: yup.string(),
});
export const HardwareRentSchema = yup.object().shape({
    person: yup.string().required("Укажите ответственного"),
    status: yup.boolean(),
    start: yup.string().required("Укажите дату выдачи"),
    end: yup.string(),
});


