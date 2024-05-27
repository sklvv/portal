import React from 'react';
import {Outlet} from "react-router-dom";
import './login.scss'
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const Auth = () => {
    return (
        <div className='authBG'>
            <div className='logoBG'>
                <div className='lionBG'>
                    <div className='loginContainer'>
                        <Box className='box'>
                            <Typography sx={{fontWeight: 600, fontStyle: 'italic', fontSize: '40px',
                                right: '30px', top: '-74px', position: 'absolute', color: '#e0e3df'}} align='center' variant="h5" component="div">iBOARD</Typography>
                            <Outlet/>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;