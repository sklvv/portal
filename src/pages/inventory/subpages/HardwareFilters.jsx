import React, {useState} from 'react';
import '../inventory.scss'
import {useGetHardware} from "../../../hook/useGetHardware";
import {useAuth} from "../../../hook/useAuth";
import {ButtonGroup, IconButton, InputAdornment, Tooltip, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {GTextField} from "../../../elements/CustomMui/customMui";
import {useTheme} from "../../../hook/useTheme";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const HardwareFilters = ({updateItem, hard, setHard}) => {
    const {data: hardware} = useGetHardware()
    const {user} = useAuth()

    /*Поиск*/
    const [search, setSearch] = useState('')
    /*Очистка поля поиска*/
    const resetSearch = ()=> {
        setSearch('')
        setHard(hardware)
    }
    /*Обновление поля поиска*/
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    /*ф-я поиска*/
    const handleKeyDown = (e)=>{
        if (e.key === 'Backspace' || e.key === 'Delete'){
            setHard(hardware)
        }
        if (e.key === 'Enter' && search.length > 1) {
            const searchedData = hard.filter(i => {
                return i.name.toLowerCase().includes(search.toLowerCase())
                    || i.type.toLowerCase().includes(search.toLowerCase())
                    || i.inventory.toLowerCase().includes(search.toLowerCase())
                    || i.factory.toLowerCase().includes(search.toLowerCase())
            })
            setHard(searchedData)
        }
    }

    return (
        <div className='licFilter'>
            <div>
                <ButtonGroup variant="outlined" size='small' sx={{verticalAlign: 'bottom'}}>
                    {
                        user && <Tooltip title={<Typography variant="body2"  gutterBottom>Добавить оборудование</Typography>}>
                            <Button onClick={()=>updateItem('update')} color={'success'}><AddCircleOutlineIcon/> Добавить</Button>
                        </Tooltip>
                    }
                </ButtonGroup>
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

export default HardwareFilters;