import './table.scss'
import BlockShadow from "../BlockShadow";

const TableItem = ({children}) => {
    return (
        <BlockShadow>
            <div className='tableItem'>
                {children}
            </div>
        </BlockShadow>
    );
};

export default TableItem;