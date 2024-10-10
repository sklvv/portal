import React, {useState} from 'react';
import '../inventory.scss'
import {useGetIPtables} from "../../../hook/useGetIPtables";
import {useAuth} from "../../../hook/useAuth";
import {ButtonGroup, IconButton, InputAdornment, Tooltip, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {GTextField} from "../../../elements/CustomMui/customMui";
import {useTheme} from "../../../hook/useTheme";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {searchInArray} from "../../../utils/searchInArray";

const IPtableFilters = ({updateItem,ipt, setIpt}) => {
    const {data: iptables} = useGetIPtables()
    const {user} = useAuth()

    /*Поиск*/
    const [search, setSearch] = useState('')
    /*Очистка поля поиска*/
    const resetSearch = ()=> {
        setSearch('')
        setIpt(iptables)
    }
    /*Обновление поля поиска*/
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    /*ф-я поиска*/
    const handleKeyDown = (e)=>{
        if (e.key === 'Backspace' || e.key === 'Delete'){
            setIpt(iptables)
        }
        if (e.key === 'Enter' && search.length > 1) {
            const keysToSearch = ["ip", "type", 'name', 'info'];
            const searchedData = searchInArray(ipt, search, keysToSearch);
            setIpt(searchedData)
        }
    }

    return (
        <div className='licFilter'>
            <div>
                <ButtonGroup variant="outlined" size='small' sx={{verticalAlign: 'bottom'}}>
                    {
                        user && <Tooltip title={<Typography variant="body2"  gutterBottom>Добавить номер пользователя</Typography>}>
                            <Button onClick={updateItem} color='success'><AddCircleOutlineIcon/> Добавить</Button>
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

export default IPtableFilters;