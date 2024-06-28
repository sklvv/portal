import './resources.scss'
import Scroll from "../../elements/Scroll";
import wiki from '../../img/res/wiki.png'
import wiki2 from '../../img/res/wiki2.png'
import app from '../../img/res/app.png'
import web from '../../img/res/web.png'
import bitrix from '../../img/res/bitrix.png'
import telegram from '../../img/res/telegram.png'
import {useTheme} from "../../hook/useTheme";
import {Divider} from "@mui/material";

const Resources = () => {
    const data = [
        {
            id: 1,
            link: 'http://192.168.1.13/wiki/index.php/%D0%9B%D0%98%D0%9A%D0%91%D0%95%D0%97_%D0%BF%D0%BE_%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%BC_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%D0%BC_%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8',
            img: wiki,
            title: 'ЛИКБЕЗ по информационным системам компании',
            type: 'article',
        },
        {
            id: 2,
            link: 'http://192.168.1.13/wiki/index.php/Microsoft_Outlook:_%D1%82%D0%BE%D0%BD%D0%BA%D0%BE%D1%81%D1%82%D0%B8_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B',
            img: wiki,
            title: 'Корпоративная почта Outlook',
            type: 'article',
        },
        {
            id: 3,
            link: 'http://bitrix.grdn.ru',
            img: bitrix,
            title: 'Bitrix24',
            type: 'application',
        },
        {
            id: 4,
            link: 'http://192.168.1.13/wiki/index.php/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0',
            img: wiki2,
            title: 'Корпоративная Wikipedia',
            type: 'application',
        },
        {
            id: 5,
            link: 'https://grdn.su/',
            img: web,
            title: 'Официальный сайт',
            type: 'application',
        },
        {
            id: 6,
            link: 'http://192.168.1.13/wiki/index.php?title=%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82_%22%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0_%D0%BD%D0%B0_%D0%98%D0%A2-%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%B3%D0%BE_%D0%BC%D0%B5%D1%81%D1%82%D0%B0%22&redirect=no',
            img: wiki,
            title: 'Заявка на ИТ-обеспечение рабочего места',
            type: 'article',
        },
        {
            id: 8,
            link: 'http://192.168.1.13/wiki/index.php/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C',
            img: wiki,
            title: 'Информационная безопасность',
            type: 'article',
        },
        {
            id: 9,
            link: 'http://192.168.1.13/wiki/index.php/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8E_%D0%BA_VPN_%D0%B8_%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%BC%D1%83_%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B5%D0%BC%D1%83_%D1%81%D1%82%D0%BE%D0%BB%D1%83',
            img: wiki,
            title: 'Инструкция по подключению к VPN',
            type: 'article',
        },
        {
            id: 10,
            link: 'http://192.168.1.13/wiki/index.php/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F_%D0%BF%D0%BE_%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8E_%D0%BA_OpenVPN',
            img: wiki,
            title: 'Инструкция по подключению к OpenVPN',
            type: 'article',
        },
        {
            id: 11,
            link: 'https://app-new.grdn.ru/RDWeb/Pages/ru-RU/login.aspx?ReturnUrl=/RDWeb/Pages/ru-RU/Default.aspx',
            img: app,
            title: 'Удаленные приложения RemoteApp',
            type: 'application',
        },
        {
            id: 12,
            link: 'https://dashboard.s3grdn.ru',
            img: web,
            title: 'Guardian Dashboard',
            type: 'application',
        },
        {
            id: 13,
            link: 'https://iboard.s3grdn.ru',
            img: web,
            title: 'Guardian iBoard',
            type: 'application',
        },
        {
            id: 14,
            link: 'https://mobile.s3grdn.ru',
            img: web,
            title: 'Guardian PROFF',
            type: 'application',
        },
        {
            id: 15,
            link: 'https://t.me/+hmuVfMekk2MxMWQy',
            img: telegram,
            title: 'Телеграм канал',
            type: '',
        },
    ]

    const renderTopic = (tag = '') => {
        const filter = data.filter(i => i.type === tag)
        return filter.map(i => <Links key={i.id} data={i}/>)
    }

    return (
        <div style={{paddingTop: '25px'}}>
            <Scroll>
                <Divider className='topicTitle'>Приложения</Divider>
                <div className='linkWrapper'>{renderTopic('application')}</div>
                <Divider className='topicTitle'>Статьи / Инструкции</Divider>
                <div className='linkWrapper'>{renderTopic('article')}</div>
                <Divider className='topicTitle'>Разное</Divider>
                <div className='linkWrapper'>{renderTopic('')}</div>
            </Scroll>
        </div>
    );
};

export default Resources;

const Links = ({data})=>{
    const {link, img, title}= data
    return (
        <div>
            <a href={link} target="_blank">
                <div className='linkBlock'>
                    <div className='img'><img src={img} alt={img} /></div>
                    <div className='content' style={{color: '#4cb242'}}>{title}</div>
                </div>
            </a>
        </div>
    )
}