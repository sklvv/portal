import React from 'react';
import './404.scss'
import {useNavigate} from "react-router";
import {Box, Button, Card, CardContent} from "@mui/material";
import {palette} from "../../utils/theme";

const Page404 = () => {
    const navigate = useNavigate()

    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true}) //ddon't use, Link to=

    return (
        <div className='block'>
            {/*<Card sx={{maxWidth: 275}}>
                <CardContent>
                    <h2>Ошибка 404</h2>
                    <p>Страница не найдена</p>
                    <Button
                        style={{ background: palette.primary[900], color: palette.white }}
                        onClick={goBack}
                        variant="contained"
                    >
                        Назад
                    </Button>
                    <Button
                        style={{
                            background: palette.primary[900],
                            color: palette.white,
                            marginLeft: "10px",
                        }}
                        onClick={goHome}
                        variant="contained"
                    >
                        На главную
                    </Button>
                </CardContent>

            </Card>*/}
            <Box sx={{maxWidth: 275}}>

                    <h1>Ошибка 404</h1>
                    <h2>Страница не найдена</h2>
                    <Button
                        style={{ background: palette.primary[900], color: palette.white }}
                        onClick={goBack}
                        variant="contained"
                    >
                        Назад
                    </Button>
                    <Button
                        style={{
                            background: palette.primary[900],
                            color: palette.white,
                            marginLeft: "10px",
                        }}
                        onClick={goHome}
                        variant="contained"
                    >
                        На главную
                    </Button>

            </Box>
        </div>
    );
};

export default Page404;