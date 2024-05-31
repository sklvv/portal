import BlockShadow from "../../elements/BlockShadow";
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import InboxIcon from '@mui/icons-material/Inbox';
import Switch from "@mui/material/Switch";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const UserAdmin = () => {
    return (
        <div>
            <BlockShadow>
                <List >
                    <ListItem disablePadding divider>
                        <ListItemButton>
                            <ListItemIcon><InboxIcon/></ListItemIcon>
                            <ListItemText sx={{width: '10%'}} primary="Имя"  />
                            <ListItemText sx={{width: '10%'}} primary={<AlternateEmailIcon/>}  />
                            <ListItemText primary="iBoard"  />
                            <ListItemText primary="Dashboard"  />
                            <ListItemText primary="Portal"  />
                            <ListItemText primary="Роль"  />
                            <ListItemText primary="Действия"  />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding divider>
                        <ListItemButton>
                            <ListItemIcon><InboxIcon/></ListItemIcon>
                            <ListItemText primary="Вадим Кузнецовм"  />
                            <ListItemText sx={{textAlign: 'left'}} primary="vadya@grdn.ru"  />
                            <ListItemText primary={<Switch/>}  />
                            <ListItemText primary={<Switch/>}  />
                            <ListItemText primary={<Switch/>}  />
                            <ListItemText primary="Админ"  />
                            <ListItemText primary="Действия"  />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding divider>
                        <ListItemButton>
                            <ListItemIcon><InboxIcon/></ListItemIcon>
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
        </div>
    );
};

export default UserAdmin;