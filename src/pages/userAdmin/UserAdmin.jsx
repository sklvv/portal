import BlockShadow from "../../elements/BlockShadow";
import List from "@mui/material/List";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, FormControlLabel,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import Switch from "@mui/material/Switch";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleIcon from '@mui/icons-material/People';


const UserAdmin = () => {
    /*accordeon*/
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <BlockShadow>
                <List >
                    <ListItem disablePadding divider>
                        <ListItem>
                            <ListItemIcon><PeopleIcon/></ListItemIcon>
                            <ListItemText sx={{width: '10%'}} primary="Имя"  />
                            <ListItemText sx={{width: '10%'}} primary={<AlternateEmailIcon/>}  />
                            <ListItemText primary="iBoard"  />
                            <ListItemText primary="Dashboard"  />
                            <ListItemText primary="Portal"  />
                            <ListItemText primary="Роль"  />
                            <ListItemText primary="Действия"  />
                        </ListItem>
                    </ListItem>
                    <ListItem disablePadding divider>
                        <ListItemButton>
                            <ListItemIcon><PersonOutlineIcon/></ListItemIcon>
                            <ListItemText primary="Вадим Кузнецовм"  />
                            <ListItemText sx={{textAlign: 'left'}} primary="vadya@grdn.ru"  />
                            <ListItemText primary={<FormControlLabel control={<Switch />} label="iBoard" />}/>
                            <ListItemText primary={<Switch/>}  label="Dashboard"/>
                            <ListItemText primary={<Switch/>}  label="Portal"/>
                            <ListItemText primary="Админ"  />
                            <ListItemText primary="Действия"  />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding divider>
                        <ListItemButton>
                            <ListItemIcon><AdminPanelSettingsIcon/></ListItemIcon>
                            <ListItemText primary="Дмитрий Лебедев"  />
                            <ListItemText primary="dima@grdn.ru"  />
                            <ListItemText primary={<Switch/>}  />
                            <ListItemText primary={<Switch/>}  />
                            <ListItemText primary={<Switch/>}  />
                            <ListItemText primary="Пользователь"  />
                            <ListItemText primary="Действия"  />
                        </ListItemButton>
                    </ListItem>
                </List>
            </BlockShadow>



            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <div style={{lineHeight: '2.3'}}><AdminPanelSettingsIcon/></div>
                        <div style={{lineHeight: '2.3'}}>Дмитрий Лебедев</div>
                        <div style={{lineHeight: '2.3'}}>dima-lebed@grdn.ru</div>
                        <div><FormControlLabel control={<Switch />} labelPlacement="start" label="iBoard" /></div>
                        <div><FormControlLabel control={<Switch />} labelPlacement="start" label="Dashboard" /></div>
                        <div><FormControlLabel control={<Switch />} labelPlacement="start" label="Portal" /></div>
                    </AccordionSummary>
                    <AccordionDetails>

                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            You are currently not an owner
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                            laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>







        </div>
    );
};

export default UserAdmin;