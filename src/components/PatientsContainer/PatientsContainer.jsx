import React from 'react';
import "../PatientsContainer/Patients.scss";
import { useEffect } from 'react';
import { useState } from 'react';
import { InfoPatient } from './InfoPatient/InfoPatient';
import { ListPatients } from './ListPatients/ListPatients';
import dots from "../../assets/img/dots.svg"

export const PatientsContainer = () => {
    const [quittingList, setQuittingList] = useState([]);
    const [presentList, setPresentList] = useState([]);
    const [profilePatient, setProfilePatient] = useState({});

    useEffect(() => {
        fetch("data/quittingList.json")
            .then(resp => resp.json())
            .then(data => setQuittingList(data));

        fetch("data/presentList.json")
            .then(resp => resp.json())
            .then(data => setPresentList(data));        
    }, []);

    return (
        <div className='patientContainer'>
            <InfoPatient profilePatient={profilePatient}/>
            <div className='dots'><img src={dots} alt="..."/></div>
            <ListPatients presentList={presentList} quittingList={quittingList} setProfilePatient={setProfilePatient}/>
        </div>
    );
}