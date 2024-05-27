import React from 'react';
import BlockShadow from "../../../elements/BlockShadow";
import {Tooltip, Typography} from "@mui/material";
import '../realization.scss'
import {dateFormat, formatAmountRU} from "../../../utils/date_number";
import RealizationChart2 from "./RealizationChart2";
import {useTheme} from "../../../hook/useTheme";

const RealizationChartBlocks2 = ({item}) => {

    return (
        <div style={{display: 'inline-block', width: '33%'}} >
            <BlockShadow>
                <Tooltip title={
                    <div className='chartTooltipTitle'>
                        <Typography variant="body2" className='head' gutterBottom>{`${item.КодОбъекта}, ${item.Объект}`}</Typography>
                        <Typography variant="body2" gutterBottom><em>Контрагент: </em><span>{item.Контрагент}</span></Typography>
                        <Typography variant="body2" gutterBottom><em>АМГ: </em><span>{item.АМГ}</span></Typography>
                        <Typography variant="body2" gutterBottom><em>РП: </em><span>{item.РуководительПроекта}</span></Typography>
                        <Typography variant="body2" gutterBottom><em>Дата окончания: </em><span>{dateFormat(item.ДатаОкончанияСрокаДействияДоговора)}</span></Typography>
                        <Typography variant="body2" gutterBottom><em>Сумма договора: </em><span>{formatAmountRU(item.СуммаДоговора)}</span></Typography>
                        <Typography variant="body2" gutterBottom><em>ВП на 1 чел, ПЛАН: </em><span>{formatAmountRU(item.ВПНаЧеловека)}</span></Typography>
                        <Typography variant="body2" gutterBottom><em>ОП, ПЛАН: </em><span>{formatAmountRU(item.ОперПрибыль)}</span></Typography>
                    </div>
                }
                >
                    <Typography sx={{mt: 2, pl: 1, pr: 1, color: useTheme('text'), cursor: 'help'}}
                                noWrap
                                align='center'
                                variant="body1"
                                gutterBottom>
                        {`${item.КодОбъекта}, ${item.Объект}`}
                    </Typography>
                </Tooltip>
                <RealizationChart2 item={item.chartData}/>
            </BlockShadow>
        </div>
    );
};

export default RealizationChartBlocks2;