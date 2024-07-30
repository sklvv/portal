import '../inventory.scss'
import {ButtonGroup, Tooltip, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useAuth} from "../../../hook/useAuth";
import {useGetLicence} from "../../../hook/useGetLicence";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const LicenceFilters = ({updateItem}) => {
    const {data: licence} = useGetLicence()
    const {user} = useAuth()
    return (
        <div className='licFilter'>
            <ButtonGroup variant="outlined" size='small' sx={{verticalAlign: 'bottom'}}>
                {
                    user && <Tooltip title={<Typography variant="body2"  gutterBottom>Добавить номер пользователя</Typography>}>
                        <Button onClick={updateItem} color={'success'}><AddCircleOutlineIcon/> Добавить</Button>
                    </Tooltip>
                }
            </ButtonGroup>
        </div>
    );
};

export default LicenceFilters;