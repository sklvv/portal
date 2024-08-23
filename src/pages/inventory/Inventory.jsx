import './inventory.scss'
import ElemTab from "../../elements/Tabs/ElemTab";
import Licence from "./subpages/Licence";
import IPtable from "./subpages/IPtable";


const Inventory = () => {
    return (
         <ElemTab arr={['Таблица IP', 'Лицензии', 'Закуп', 'Баланс', ]}>
             <IPtable/>
             <Licence/>
            <div> 2222</div>
        </ElemTab>
    );
}


export default Inventory;