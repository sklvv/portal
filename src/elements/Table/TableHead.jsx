import './table.scss';
import {useTheme} from "../../hook/useTheme";

const TableHead = ({children, }) => {
    const styleBgColor = useTheme('listHeader')
    const styleColor = useTheme('listHeaderText')


    return (
        <div className='tableHeader' style={{backgroundColor: styleBgColor, color: styleColor}}>
            {children}
        </div>
    );
};

export default TableHead;