import React, {useState} from 'react';
import {Tabs} from "@mui/material";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";


const ElemTabPanel = (props)=> {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{}}>{children}</Box>}
        </div>
    );
}


const ElemTab = ({arr = [], children, inner = false}) => {
    const [value, setValue] = useState(0);

    const tabMaker = (arr) => {
        return arr.map((i, key)=>{
            return <Tab label={i} id={key} key={key} />
        })
    }
    const renderTab = tabMaker(arr)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const panelMaker = (children)=>{
        return children.map((i, key)=>{
            return <ElemTabPanel value={value} index={key}  key={key}>
                {children[key]}
            </ElemTabPanel>
        })
    }
    const renderPanel = panelMaker(children)

    return (
        <Box sx={{position: inner ? '' : 'fixed', right: 0, left: '75px'}}>
            <Tabs value={value} onChange={handleChange}
                  sx={{
                      "& .MuiTabs-indicator": { backgroundColor: "#12c325" },
                      "& .MuiTab-root.Mui-selected": { color: "#12c325", fontWeight:"700" },
                      "& .MuiTab-root": { color: "#808080"},
                      borderBottom: 1, borderColor: '#e2e2e27a'
                  }}
            >
                {renderTab}
            </Tabs>
            {renderPanel}
        </Box>
    );
};

export default ElemTab;