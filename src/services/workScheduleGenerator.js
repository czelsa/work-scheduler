function generateSchedule(workHoursPerDay, employeesCount, weekType) {
  // Sprawdzamy czy parametry wejściowe są poprawne
  if (!workHoursPerDay || !employeesCount || !weekType) {
    throw new Error("Nieprawidłowe parametry wejściowe");
  }

  // Utworzenie pustej tablicy na harmonogram
  const schedule = [];

  // Dla każdego pracownika, dodajemy harmonogram do tablicy
  for (let i = 0; i < employeesCount; i++) {
    let startHour = 8; // Godzina rozpoczęcia pracy (dla przykładu ustalamy na 8)
    let endHour = startHour + workHoursPerDay; // Godzina zakończenia pracy
    const hoursPerDay = workHoursPerDay; // Liczba godzin pracy dziennie
    const employeeIndex = i + 1; // Numer pracownika, zaczynając od 1

    // Jeśli tydzień jest typu "shift", zmień godzinę rozpoczęcia pracy dla drugiego pracownika
    if (weekType === "shift" && i === 1) {
      startHour += 2; // Przesuwamy godzinę rozpoczęcia pracy o 2 godziny
      endHour += 2; // Przesuwamy godzinę zakończenia pracy o 2 godziny
    }

    // Dodajemy harmonogram dla bieżącego pracownika do tablicy
    schedule.push({
      employeeIndex,
      startHour,
      endHour,
      hoursPerDay
    });
  }

  // Zwracamy tablicę z harmonogramami dla wszystkich pracowników
  return schedule;
}

export { generateSchedule };