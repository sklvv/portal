import React from 'react';
import {ButtonGroup, Tooltip, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {useAuth} from "../../../hook/useAuth";
import {useGetLicence} from "../../../hook/useGetLicence";

const LicenceFilters = ({updateItem}) => {
    const {data: licence} = useGetLicence()
    const {user} = useAuth()
    return (
        <div>
            <ButtonGroup variant="outlined" size='small' sx={{verticalAlign: 'bottom'}}>
                {
                    user && <Tooltip title={<Typography variant="body2"  gutterBottom>Добавить номер пользователя</Typography>}>
                        <Button onClick={updateItem} color={'success'}><PersonAddIcon/> Добавить</Button>
                    </Tooltip>
                }
            </ButtonGroup>
        </div>
    );
};

export default LicenceFilters;