// function generateSchedule(workHoursPerDay, employeesCount, weekType) {
//   console.log('PIESEK');

//     // 1. Sprawdzenie ilości godzin otwarcia i pracowników
//     const totalWorkHours = weekType === 'everyday' ? 7 * workHoursPerDay :
//                            weekType === 'weekdays' ? 5 * workHoursPerDay + 2 * 8 :
//                            weekType === 'businessDays' ? 6 * workHoursPerDay + 2 * 8 :
//                            0; // niepoprawny rodzaj tygodnia pracy
    
//     const requiredEmployees = Math.ceil(totalWorkHours / (employeesCount * workHoursPerDay));
  
//     // 2. Wyznaczenie liczby dni roboczych
//     const workDays = weekType === 'everyday' ? 7 :
//                      weekType === 'weekdays' ? 5 :
//                      weekType === 'businessDays' ? 6 :
//                      0; // niepoprawny rodzaj tygodnia pracy
  
//     // 3. Wyznaczenie liczby godzin dziennie na jednego pracownika
//     const dailyWorkHoursPerEmployee = Math.ceil(totalWorkHours / (employeesCount * workDays));
  
//     // 4. Przydział pracowników do dni roboczych
//     const schedule = [];
//     // const employeesWorkHours = new Array(employeesCount).fill(0);

//     let employeeIndex = 0;
//     for (let i = 0; i < workDays; i++) {
//       const daySchedule = {
//         dayOfWeek: i,
//         employees: [],
//         startHour: 8,
//         endHour: 16
//       };
  
//       // Przydzielenie pracowników
//       for (let j = 0; j < requiredEmployees; j++) {
//         if (employeeIndex >= employeesCount) {
//           employeeIndex = 0;
//         }
//         daySchedule.employees.push(employeeIndex++);
//       }
  
//       schedule.push(daySchedule);
//     //   employeesWorkHours[employeeIndex - 1] += dailyWorkHoursPerEmployee;
//     }
  
//     // 5. Przydział pracowników w dniach wolnych
//     if (weekType === 'weekdays' || weekType === 'businessDays') {
//       const weekendSchedule = schedule.slice(-2);
  
//       for (let i = 0; i < weekendSchedule.length; i++) {
//         const daySchedule = weekendSchedule[i];
  
//         // Przydzielenie pracowników
//         for (let j = 0; j < requiredEmployees; j++) {
//           if (employeeIndex >= employeesCount) {
//             employeeIndex = 0;
//           }
//           daySchedule.employees.push(employeeIndex++);
//         }
//       }
//     }
  
//     // 6. Wyznaczenie godzin pracy pracowników
//     for (let i = 0; i < schedule.length; i++) {
//       const daySchedule = schedule[i];
//       let startHour = daySchedule.startHour;
  
//       for (let j = 0; j < daySchedule.employees.length; j++) {
//         const employeeIndex = daySchedule.employees[j];
//         const endHour = startHour + dailyWorkHoursPerEmployee;
  
//         daySchedule.employees[j] = {
//           employeeIndex,
//           startHour,
//           endHour
//         };
  
//         startHour = endHour;
//       }
  
//       daySchedule.endHour = startHour;
//     }


//     // 7. Przydział dodatkowych godzin pracy
//     const availableEmployees = employeesCount - requiredEmployees;
//     if (availableEmployees > 0) {
//       // Utworzenie słownika, w którym kluczami są pracownicy, a wartościami ich godziny pracy
//       const employeeWorkHours = {};
//       for (let i = 0; i < employeesCount; i++) {
//         employeeWorkHours[i] = 0;
//       }
  
//       // Zliczenie liczby godzin pracy dla każdego pracownika
//       for (let i = 0; i < schedule.length; i++) {
//         const daySchedule = schedule[i];
  
//         for (let j = 0; j < daySchedule.employees.length; j++) {
//           const employeeIndex = daySchedule.employees[j].employeeIndex;
//           const workHours = daySchedule.employees[j].endHour - daySchedule.employees[j].startHour;
  
//           employeeWorkHours[employeeIndex] += workHours;
//         }
//       }
  
//       // Dodanie dodatkowych godzin pracy
//       for (let i = 0; i < schedule.length; i++) {
//         const daySchedule = schedule[i];
  
//         if (daySchedule.employees.length < requiredEmployees) {
//           const missingEmployees = requiredEmployees - daySchedule.employees.length;
  
//           for (let j = 0; j < missingEmployees; j++) {
//             let availableEmployeeIndexes = [];
  
//             // Znalezienie pracowników z najmniejszą liczbą godzin pracy
//             let minWorkHours = Infinity;
//             for (let k = 0; k < employeesCount; k++) {
//               if (employeeWorkHours[k] < minWorkHours) {
//                 minWorkHours = employeeWorkHours[k];
//                 availableEmployeeIndexes = [k];
//               } else if (employeeWorkHours[k] === minWorkHours) {
//                 availableEmployeeIndexes.push(k);
//               }
//             }
  
//             // Wybranie losowego pracownika spośród tych z najmniejszą liczbą godzin pracy
//             const randomIndex = Math.floor(Math.random() * availableEmployeeIndexes.length);
//             const chosenEmployeeIndex = availableEmployeeIndexes[randomIndex];
  
//             // Dodanie dodatkowej godziny pracy dla wybranego pracownika
//             daySchedule.employees.push({
//               employeeIndex: chosenEmployeeIndex,
//               startHour: daySchedule.startHour,
//               endHour: daySchedule.startHour + 1
//             });
  
//             employeeWorkHours[chosenEmployeeIndex] += 1;
//           }
//         }
//       }
//     }
//     return schedule;
//   }

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