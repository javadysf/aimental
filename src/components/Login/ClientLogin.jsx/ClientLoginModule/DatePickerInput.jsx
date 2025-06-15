import { useState } from 'react';


const DatePickerInput = ({therapistInfo,settherapistInfo,ClientDetail,setClientDetail}) => {
  const [date, setDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2024);
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleDateChange = (day) => {
    setDate(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`)
    therapistInfo&&settherapistInfo({...therapistInfo,birth_date:`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`})
    ClientDetail&&setClientDetail({...ClientDetail,birth_date:`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`})
    setIsOpen(false);
  };

  const handleMonthChange = (month) => {
    setMonth(month);
  };

  const handleYearChange = (year) => {
    setYear(year);
  };
console.log(ClientDetail);
  return (
    <div className="relative">
      <input
        type="text"
        value={therapistInfo?.birth_date || ClientDetail?.birth_date}
        placeholder="Date of Brith*"
        className="w-full dark:bg-zinc-800 dark:text-neutral-300 p-2 bg-zinc-50 text-sm border border-zinc-600 rounded-xl focus:ring-blue-500 focus:border-blue-500"
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-md p-4 rounded-lg">
          <div className="flex justify-between mb-4">
            <select
              value={month}
              onChange={(e) => handleMonthChange(Number(e.target.value))}
              className="text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {new Date(2024, i).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => handleYearChange(Number(e.target.value))}
              className="text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i} value={2024 - i}>
                  {2024 - i}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => handleDateChange(day)}
                className="text-sm text-gray-700 hover:bg-blue-100 rounded-lg p-2"
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;