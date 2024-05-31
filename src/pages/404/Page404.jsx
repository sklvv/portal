import './404.scss'
import {useNavigate} from "react-router";
import {Box, Button} from "@mui/material";


const Page404 = () => {
    const navigate = useNavigate()

    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true}) //ddon't use, Link to=

    return (
        <div className='block'>
            <Box sx={{maxWidth: 275}}>
                <h1>Ошибка 404</h1>
                <h2>Страница не найдена</h2>
                {/*<Button color='success' onClick={goBack} variant="contained">Назад</Button>
                <Button color='success' sx={{marginLeft: "10px", }} onClick={goHome} variant="contained">На главную</Button>*/}
            </Box>
        </div>
    );
};

export default Page404;