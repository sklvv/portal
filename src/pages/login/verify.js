import * as yup from "yup"

const txt ={
    min: "Пароль должен иметь длину от 4 до 16 символов",
    max: "Длинна пароля должа быть от 4 до 16 символов",
    match: "Пароли не совпадают",
    login: "Некорректный адрес электронной почты"
}

export const loginSchema = yup.object().shape({
    login: yup.string()
        .required("Укажите ваш Email")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, txt.login),
    password: yup.string()
        .required("Введите пароль")
        .min(4, txt.min)
        .max(16, txt.max),
});

export const registerSchema = yup.object().shape({
    name: yup.string()
        .required("Необходимо ввести имя")
        .min(4, txt.min),
    login: yup.string()
        .required("Укажите ваш Email")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Некорректный адрес электронной почты"),
    password: yup.string()
        .required("Необходимо ввести пароль")
        .min(4, txt.min)
        .max(16, txt.max),
    cpassword: yup.string()
        .required("Пароли не совпадают")
        .oneOf([yup.ref("password")], txt.match),
});

export const resetSchema = yup.object().shape({
    email: yup.string()
        .required("Укажите ваш Email")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Некорректный адрес электронной почты"),
});