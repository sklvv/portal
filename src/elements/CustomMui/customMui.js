import {styled} from "@mui/material/styles";
import {FormControl, InputLabel} from "@mui/material";
import TextField from "@mui/material/TextField";

/*инпут селекта нижняя линия зеленая*/
export const GFormControl = styled(FormControl)(({ theme }) => ({
    "& .MuiInput-underline:after": { borderBottomColor: '#4cb242'},
}));
/*лейбл селекта*/
export const GInputLabel = styled(InputLabel)(({ theme }) => ({
    '&.Mui-focused': {color: '#4cb242'},
}));
/*инпут поиска нижняя линия зеленая*/
export const GTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInput-underline:after": { borderBottomColor: '#4cb242'},
    "& .MuiInput-root:before": {borderBottom: '1px solid rgb(132 132 132 / 74%)'},
    '& .Mui-focused': {color: '#4cb242 !important'},
    'input:before': {borderBottomColor: '#7d7d7d6b'},
    '& .MuiFormLabel-root': {color: 'grey'},
    '& .MuiInput-root' : {color: '#fff'},
    /*'& .MuiInputAdornment-root' : {color:'white'},*/
    '& .MuiButtonBase-root .black' : {backgroundColor: 'white'},
    '&:hover .black': {backgroundColor: 'grey'},
    '& .MuiInput-input.Mui-disabled': {color: 'grey'},
    '& .MuiInputLabel-root.Mui-disabled': {color: 'grey'},
   /* '& .MuiInputAdornment-root' : {color: '#4cb242'},*/
   /* 'input': {
        '&::placeholder': {
            color: 'white'
        }
    }*/
}));



