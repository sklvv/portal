import './elements.scss'
import {useTheme} from "../hook/useTheme";

const Scroll = ({children}) => {

    return (
        <div className={`scroll`} style={{scrollbarColor: `green ${useTheme('scroll')}`}}>
            {children}
        </div>
    );
};

export default Scroll;