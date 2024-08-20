import './inventory.scss'
import ElemTab from "../../elements/Tabs/ElemTab";
import Licence from "./subpages/Licence";
import IPtable from "./subpages/IPtable";


const Inventory = () => {
    return (
         <ElemTab arr={['Лицензии','Таблица IP', 'Закуп', 'Баланс', ]}>
            <Licence/>
             <IPtable/>
            <div> 2222</div>
        </ElemTab>
    );
}


export default Inventory;