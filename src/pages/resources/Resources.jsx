import './resources.scss'

import ElemTab from "../../elements/Tabs/ElemTab";
import ResLinks from "./subpages/ResLinks";
import ResMailGroups from "./subpages/ResMailGroups";

const Resources = () => {




    return (
            <ElemTab arr={['Ресурсы компании', 'Почтовые группы рассылок']}>
                <ResLinks/>
                <ResMailGroups/>
            </ElemTab>

    );
};

export default Resources;

