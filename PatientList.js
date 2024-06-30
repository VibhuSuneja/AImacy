import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/patients/')
            .then(response => {
                setPatients(response.data);
            });
    }, []);

    return (
        <div>
            <h1>Patients</h1>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>{patient.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
