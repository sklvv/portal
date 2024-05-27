import React from 'react';
import './elements.scss'
import {useTheme} from "../hook/useTheme";

const BlockShadow = ({children}) => {
    const theme = `blockShadow ${useTheme('select')}`

    return (
        <div className={theme}>
            {children}
        </div>
    );
};

export default BlockShadow;