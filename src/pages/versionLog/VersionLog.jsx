
import './versionLog.scss'
import Scroll from "../../elements/Scroll";

const VersionLog = () => {
    return (

        <div className='versionPage'>
            <Scroll>
                <div className='verLog'>
                    <div className='version'>
                        <div>08.08.2024</div>
                        <div>1.0.0</div>
                    </div>
                    <div className='page'>Версии</div>
                    <ul>
                        <li>Добавлена страница логов изминений и доработок</li>
                    </ul>
                    <div className='page'>Ресурсы</div>
                    <ul>
                        <li>Добавлены вкладки для разделения информации</li>
                        <li>Добавлен раздел с информацией о группах рассылки</li>
                    </ul>
                    <div className='page'>Учет [администрирование]</div>
                    <ul>
                        <li>Добавлена страница учета лицензий</li>
                    </ul>
                </div>

            </Scroll>







        </div>
    );
};

export default VersionLog;