import React from 'react';
import "../Patients.scss";
import arrow_down from "../../../assets/img/arrow.svg";
import classNames from 'classnames';


export const InfoPatient = ({profilePatient}) => {
    const age = new Date().getFullYear() - new Date(profilePatient.birthDate).getFullYear();

    return (
        <div className={classNames("infoPatient", {"info_active": !!Object.keys(profilePatient).length})}>
            <div className='top'>
                <div className='title'>Информация о пациенте</div>
                <div className='arrow_icon'><img className="arrow_icon" src={arrow_down} alt="<"/></div>
            </div>
            
            <div className='description'>
                <div>
                    <div>ФИО</div>
                    <div className='desc_field'>{profilePatient.firstName} {profilePatient.lastName}</div>
                </div>
                <div>
                    <div>Возраст</div>
                    <div className='desc_field'>{age ? age : null}</div>
                </div>
                <div>
                    <div>Диагноз</div>
                    <div className='desc_field'>{profilePatient.diagnosis}</div>
                </div>
            </div>
        </div>
    );
}