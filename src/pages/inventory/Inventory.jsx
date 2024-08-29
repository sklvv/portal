import './inventory.scss'
import ElemTab from "../../elements/Tabs/ElemTab";
import Licence from "./subpages/Licence";
import IPtable from "./subpages/IPtable";
import Hardware from "./subpages/Hardware";


const Inventory = () => {
    return (
         <ElemTab arr={['Таблица IP', 'Лицензии', 'Оборудование','Аренда', ]}>
             <IPtable/>
             <Licence/>
             <Hardware/>
            <div> 2222</div>
        </ElemTab>
    );
}


export default Inventory;