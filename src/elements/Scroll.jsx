import './elements.scss'
import {useTheme} from "../hook/useTheme";


const Scroll = ({children, h = 'h166'}) => {


    return (
        <div className={`scroll ${h}`} style={{scrollbarColor: `green ${useTheme('scroll')}`}}>
            {children}
        </div>
    );
};

export default Scroll;