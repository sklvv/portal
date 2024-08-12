import './inventory.scss'
import ElemTab from "../../elements/Tabs/ElemTab";
import Licence from "./subpages/Licence";


const Inventory = () => {
    return (
         <ElemTab arr={['Лицензии', 'Закуп', 'Баланс']}>
            <Licence/>
            <div> 2222</div>
        </ElemTab>
    );
}


export default Inventory;