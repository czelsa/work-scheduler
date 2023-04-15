import React, { useState } from 'react';

const WorkScheduleForm = ({ onSubmit }) => {
  const [openingHours, setOpeningHours] = useState({ from: '', to: '' });
  const [numOfEmployees, setNumOfEmployees] = useState(0);
  const [weekType, setWeekType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // tutaj możesz dodać kod do przetwarzania wprowadzonych danych
    onSubmit(openingHours, numOfEmployees, weekType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Godziny otwarcia zakładu:
        <input
          type="number"
          className="form-input"
          value={openingHours.from}
          onChange={(event) => setOpeningHours({ ...openingHours, from: event.target.value })}
        />
        <input
          type="number"
          className="form-input"
          value={openingHours.to}
          onChange={(event) => setOpeningHours({ ...openingHours, to: event.target.value })}
        />
      </label>
      <label>
        Ilość pracowników:
        <input
          type="number"
          className="form-input"
          value={numOfEmployees}
          onChange={(event) => setNumOfEmployees(event.target.value)}
        />
      </label>
      <label className="form__label">
        Rodzaj tygodnia pracy:
        <select className="form__select" value={weekType} onChange={(event) => setWeekType(event.target.value)}>
          <option className="form__option" value="">--Wybierz--</option>
          <option className="form__option" value="everyday">Codziennie</option>
          <option className="form__option" value="weekdays">Od poniedziałku do piątku</option>
          <option className="form__option" value="businessDays">Tylko w dni handlowe</option>
        </select>
      </label>
      <button type="submit" className="button">Generuj grafik</button>
    </form>
  );
};

export default WorkScheduleForm;
