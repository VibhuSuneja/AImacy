import React from 'react';
import PatientList from './components/PatientList';
import PrescriptionList from './components/PrescriptionList';

const App = () => {
    return (
        <div>
            <h1>Pharmacy Management System</h1>
            <PatientList />
            <PrescriptionList />
        </div>
    );
};

export default App;
