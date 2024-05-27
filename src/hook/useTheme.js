import {dark, light} from "../utils/theme";
import {useSelector} from "react-redux";

export const useTheme = (param = false, param2 = false)=> {
    const mode = useSelector(state => state.header.mode);
    const theme =  mode === "dark" ? dark : light

    if (!param) {
        return mode === "dark" ? true : false
    } else if (param2){
        return theme[param][param2]
    }
     else {
        return theme[param]
    }
}