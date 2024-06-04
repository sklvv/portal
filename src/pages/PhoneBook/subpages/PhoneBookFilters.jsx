import '../phoneBook.scss';
import {ButtonGroup, IconButton, InputAdornment, Tooltip, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {GTextField} from "../../../elements/CustomMui/customMui";
import {useState} from "react";
import Button from "@mui/material/Button";
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const PhoneBookFilters = ({updateItem}) => {
    /*Поиск*/
    const [search, setSearch] = useState('')
    /*Очистка поля поиска*/
    const resetSearch = ()=> {
        setSearch('')
    }
    /*Обновление поля поиска*/
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    /*ф-я поиска*/
    const handleKeyDown = (e)=>{
        /*if (e.key === 'Enter' && search.length > 2) {
            const searchedData = filteredData.filter(i => {
                return i.Объект.toLowerCase().includes(search.toLowerCase()) || i.КодОбъекта.includes(search)
            })
            dispatch(setFilteredData(searchedData))
        }*/
    }


    return (
        <div className='filters'>
            <ButtonGroup variant="outlined" size='small' sx={{verticalAlign: 'bottom'}}>
                <Tooltip title={<Typography variant="body2"  gutterBottom>Добавить номер пользователя</Typography>}>
                    <Button onClick={updateItem} variant="contained" color={'success'}><PersonAddIcon/></Button>
                </Tooltip>
                <Tooltip title={<Typography variant="body2"  gutterBottom>fdgdfghfgh</Typography>}>
                <Button color={'success'}><PersonAddIcon/></Button>
            </Tooltip>

            </ButtonGroup>
            <div className='searchFilter'>
                <GTextField id="realiz_search" sx={{pt: '15px', width: '300px', pr: '15px'}}  variant="standard" placeholder='Поиск' value={search}
                            onKeyDown={handleKeyDown}  onChange={handleSearch} InputProps={{
                    startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),
                    endAdornment:(<InputAdornment position="end"><IconButton onClick={resetSearch}><CloseIcon /></IconButton></InputAdornment>)
                }}/>
            </div>
        </div>
    );
};

export default PhoneBookFilters;