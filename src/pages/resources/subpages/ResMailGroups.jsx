import Scroll from "../../../elements/Scroll";
import TableItem from "../../../elements/Table/TableItem";
import TableHead from "../../../elements/Table/TableHead";
import '../resources.scss'
import {useModal} from "../../../hook/useModal";
import {useDispatch} from "react-redux";
import {setDataForModal} from "../../../elements/Modal/ModalSlice";
import {CopyToClipboard} from 'react-copy-to-clipboard';


const ResMailGroups = () => {
    const data = [
        {
            id: 1,
            name: 'GuardianFolks',
            email:'GuardianFolks@grdn.ru',
            text: 'Общая группа рассылки по всем сотрудникам компании',
        },
        {
            id: 2,
            name: 'Сотрудники офиса',
            email:'office.group@grdn.ru',
            text:'Общая группа рассылки по всем сотрудникам офиса',
        },
        {
            id: 3,
            name:'Команда Управления',
            email:'manage.group@grdn.ru',
            text:'Общая группа сотрудников Команды Управления',
        },
        {
            id: 4,
            name:'Руководители отделов',
            email:'head.group@grdn.ru',
            text:'Группа рассылки для всем руководителям отделов (вне зависимосимо входит ли в команду управления)',
        },
        {
            id: 5,
            name:'АМГ',
            email:'amg.group@grdn.ru',
            text:'Группа рассылки для сотрудников автономных маржинальных групп',
        },
        {
            id: 6,
            name:'РП',
            email:'rp.group@grdn.ru',
            text:'Группа рассылки для руководителей проектов',
        },
        {
            id: 7,
            name:'ГИП',
            email:'gip.group@grdn.ru',
            text:'Группа рассылки для главных инженеров проектов',
        },
        {
            id: 8,
            name:'Бухгалтерия',
            email:'buh.group@grdn.ru',
            text:'Группа рассылки для Бухгалтерии',
        },
        {
            id: 9,
            name:'Отдел Комплектации',
            email:'ok.group@grdn.ru',
            text:'Общая группа сотрудников отдела БСС',
        },
        {
            id: 10,
            name:'Отдел кадров',
            email:'hr.group@grdn.ru',
            text:'Группа рассылки для отдела кадров',
        },
        {
            id: 11,
            name:'Охрана труда',
            email:'ohr.group@grdn.ru',
            text:'Группа рассылки для сотрудников по охране труда',
        },
        {
            id: 12,
            name:'Отдел ИТ',
            email:'it.group@grdn.ru',
            text:'Группа для обращений в ИТ - отдел по вопросам техподдержки',
        },
        {
            id: 13,
            name:'Маркетинг',
            email:'marketing.group@grdn.ru',
            text:'Группа рассылки для отдела маркетинга',
        },
        {
            id: 14,
            name:'Проектный отдел',
            email:'project.group@grdn.ru',
            text:'Группа рассылки для сотрудников проектного отдела',
        },
        {
            id: 15,
            name:'Производственный отдел',
            email:'pro.group@grdn.ru',
            text:'Группа рассылки для сотрудников производственного отдела',
        },
        {
            id: 16,
            name:'Сметная группа',
            email:'smet.group@grdn.ru',
            text:'Группа рассылки для сотрудников сметного отдела',
        },
        {
            id: 17,
            name:'СЦ Общая',
            email:'sc.group@grdn.ru',
            text:'Группа рассылки для сервисного центра в том числе сервисные центры в других городах',
        },
        {
            id: 18,
            name:'СЦ Пермь',
            email:'sc.perm@grdn.ru',
            text:'Общая группа сотрудников сервисного центра г. Пермь',
        },
    ]

    return (
        <div style={{paddingTop: '15px'}} >
            <div style={{width: "90%", margin: "0 auto"}}>
                <TableHead >
                    <div style={{width: '3%'}} className='listIcon'>#</div>
                    <div style={{width: '20%'}} className='listIcon'>Название группы</div>
                    <div style={{width: '25%'}} className='listIcon'>Почтовый адрес</div>
                    <div style={{width: '52%'}} className='listIcon'>Описание</div>
                </TableHead>
            </div>
            <Scroll>
                    <div style={{width: '90%', margin: '0 auto'}}>
                        {data?.map(i => {return <Line i={i} key={i.id}/>})}
                    </div>
            </Scroll>
        </div>
    );
};

export default ResMailGroups;

const Line = ({i}) => {
    const {id, name, email, text} = i
    const {setModal} = useModal()
    const dispatch = useDispatch()


    return <TableItem  extra='neon'>
        <div style={{width: '3%'}}>{id}</div>
        <div style={{width: '20%'}}>{name}</div>
        <CopyToClipboard text={email} onCopy={(email, result) => {
                dispatch(setDataForModal(email))
                setModal('ModalResMailGroups')
            }
        }>
            <div style={{width: '25%'}} className='neonBlue' >{email}</div>
        </CopyToClipboard>

        <div style={{width: '52%'}}>{text}</div>
    </TableItem>
}














