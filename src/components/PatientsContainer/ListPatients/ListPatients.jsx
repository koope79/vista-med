import React from 'react';
import { useState } from 'react';
import "../Patients.scss";
import classNames from "classnames";

const Patients = ({ presentList, quittingList, isPresentList, setProfilePatient }) => {

    function renderList(data) {
        const list = data.map((p, index) => {
            const number = index + 1;
            return (
                <div key={index} className='desc_columns' onClick={() => setProfilePatient({firstName: p.firstName, lastName: p.lastName, birthDate: p.birthDate, diagnosis: p.diagnosis})}>
                    <div>{number}</div>
                    <div>{`${p.firstName} ${p.lastName}`}</div>
                    <div>{isPresentList ? p.bedNumber : p.cause}</div>
                </div>
            );
            }
        );
        return list;
    }

    return (
        <div className='list_content'>
            <div className='table'>
                <div className='table_column'>№ ИБ</div>
                <div className='table_column'>ФИО</div>
                <div className='table_column'>{isPresentList ? "Палата" : "Причина выбытия" }</div>
            </div>
            <div className='renderList'>
                {isPresentList ? renderList(presentList) : renderList(quittingList)}
            </div>
        </div>

    );
}

export const ListPatients = ({ presentList, quittingList, setProfilePatient }) => {
    const [isPresentList, setIsPresentList] = useState(true);

    return (
        <div className="listPatients">
            <div className='top'>
                <div className={classNames({"top_active": isPresentList})} onClick={() => {setIsPresentList(true); setProfilePatient({})}}><span>Присутствуют</span>{`(${presentList.length})`}</div>
                <div className={classNames({"top_active": !isPresentList})} onClick={() => {setIsPresentList(false); setProfilePatient({})}}><span>Выбывшие</span>{`(${quittingList.length})`}</div>
            </div>
            {<Patients presentList={presentList} quittingList={quittingList} isPresentList={isPresentList} setProfilePatient={setProfilePatient}/>}
        </div>
    );
}