import './resources.scss'

import ElemTab from "../../elements/Tabs/ElemTab";
import ResLinks from "./subpages/ResLinks";
import ResMailGroups from "./subpages/ResMailGroups";

const Resources = () => {




    return (
            <div style={{position: 'fixed', right: 0, left: '75px'}}>
                <ElemTab arr={['Ресурсы компании', 'Почтовые группы']}>
                    <ResLinks/>
                    <ResMailGroups/>
                </ElemTab>
            </div>

    );
};

export default Resources;

