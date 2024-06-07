import React from 'react';
import './elements.scss'
import {useTheme} from "../hook/useTheme";

const BlockShadow = ({children}) => {
    const theme = `blockShadow ${useTheme('select')}`

    return (
        <div className={theme} style={{borderRadius: '10px 10px 0 0'}}>
            {children}
        </div>
    );
};

export default BlockShadow;