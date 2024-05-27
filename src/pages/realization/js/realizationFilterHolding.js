import rosneft from '../../../img/holding/rosneft.png'
import lukoil from '../../../img/holding/lukoil.png'
import fosagro from '../../../img/holding/fosagro.png'
import sibur from '../../../img/holding/sibur.png'
import novatek from '../../../img/holding/novatek.png'
import uralkaliy from '../../../img/holding/uralkaliy.png'
import metafraks from '../../../img/holding/metafraks.png'
import nologo from '../../../img/holding/nologo.png'

export const setHoldingImg = (holdName) =>{
    switch (holdName) {
        case ('РОСНЕФТЬ'):
            return  rosneft
            break;
        case ('НОВАТЭК'):
            return  novatek
            break;
        case ('УРАЛКАЛИЙ'):
            return  uralkaliy
            break;
        case ('МЕТАФРАКС'):
            return  metafraks
            break;
        case ('ФОСАГРО'):
            return  fosagro
            break;
        case ('ЛУКОЙЛ'):
            return  lukoil
            break;
        case ('СИБУР'):
            return  sibur
            break;
        default:
            return nologo
    }


}