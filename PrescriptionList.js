import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrescriptionList = () => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/prescriptions/')
            .then(response => {
                setPrescriptions(response.data);
            });
    }, []);

    return (
        <div>
            <h1>Prescriptions</h1>
            <ul>
                {prescriptions.map(prescription => (
                    <li key={prescription.id}>
                        {prescription.medication} - {prescription.dosage}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PrescriptionList;
