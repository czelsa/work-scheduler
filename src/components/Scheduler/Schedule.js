import React, { useState } from 'react';
import WorkScheduleForm from '../Scheduler/WorkScheduleForm';
import ScheduleList from '../Scheduler/ScheduleList';
import { generateSchedule } from '../../services/workScheduleGenerator';
import './Schedule.css';


function Schedule() {
    const [showForm, setShowForm] = useState(false);
    const [schedule, setSchedule] = useState([]);

    const handleSubmit = (workHoursPerDay, employeesCount, weekType) => {
        const newSchedule = generateSchedule(workHoursPerDay, employeesCount, weekType);
        setSchedule(newSchedule);
      };

    return (
    <div>
        {showForm ? (
        <WorkScheduleForm className="form" onSubmit={handleSubmit}/>
        ) : (
        <button className="button" onClick={() => setShowForm(true)}>Dodaj grafik</button>
        )}
        <ScheduleList className="table" schedule={schedule} />
    </div>
    );
}

export default Schedule;
