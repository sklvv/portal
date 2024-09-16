import '../inventory.scss'
import {ButtonGroup, FormControlLabel, IconButton, InputAdornment, Tooltip, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useAuth} from "../../../hook/useAuth";
import {useGetLicence} from "../../../hook/useGetLicence";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useState} from "react";
import {GTextField} from "../../../elements/CustomMui/customMui";
import {useTheme} from "../../../hook/useTheme";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
import {searchInArray} from "../../../utils/searchInArray";

const LicenceFilters = ({updateItem,lic, setLic, check, setCheck}) => {
    const {data: licence} = useGetLicence()
    const {user} = useAuth()


    const showLic = () =>{
        setCheck(!check)
    }


    /*Поиск*/
    const [search, setSearch] = useState('')
    /*Очистка поля поиска*/
    const resetSearch = ()=> {
        setSearch('')
        setLic(licence)
    }
    /*Обновление поля поиска*/
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    /*ф-я поиска*/
    const handleKeyDown = (e)=>{
        if (e.key === 'Backspace' || e.key === 'Delete'){
            setLic(licence)
        }
        if (e.key === 'Enter' && search.length > 1) {
            const keysToSearch = ["org", "seller", 'vendor'];
            const searchedData = searchInArray(lic, search, keysToSearch);
            setLic(searchedData)
        }
    }
    return (
        <div className='licFilter'>
            <div>
                <ButtonGroup variant="outlined" size='small' sx={{verticalAlign: 'bottom'}}>
                    {
                        user && <Tooltip title={<Typography variant="body2"  gutterBottom>Добавить номер пользователя</Typography>}>
                            <Button onClick={updateItem} color={'success'}><AddCircleOutlineIcon/> Добавить</Button>
                        </Tooltip>
                    }
                </ButtonGroup>
                <Tooltip title={<Typography variant="body2"  gutterBottom>Показ неактивных лицензий</Typography>}>
                    <FormControlLabel sx={{ml: '20px'}} control={<Switch onClick={showLic} checked={check} color="success"/>} label="Показать неактивные" />
                </Tooltip>
            </div>
            <div className='searchFilter'>
                <GTextField id="realiz_search" sx={{pt: '15px', width: '300px', pr: '15px', color: useTheme('text')}}  variant="standard" placeholder='Поиск' value={search}
                            onKeyDown={handleKeyDown}  onChange={handleSearch} InputProps={{
                    startAdornment: (<InputAdornment position="start"><SearchIcon sx={{color: useTheme('text')}} /></InputAdornment>),
                    endAdornment:(<InputAdornment position="end"><IconButton onClick={resetSearch}><CloseIcon sx={{color: useTheme('text')}} /></IconButton ></InputAdornment>)
                }}/>
            </div>
        </div>
    );
};

export default LicenceFilters;