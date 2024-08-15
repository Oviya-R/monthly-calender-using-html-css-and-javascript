document.addEventListener('DOMContentLoaded', () => {
    const monthYearElem = document.getElementById('month-year');
    const daysElem = document.getElementById('days');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    function renderCalendar(year, month) {
       
        monthYearElem.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
        daysElem.innerHTML = '';

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDay = firstDay.getDay();
        const totalDays = lastDay.getDate();

        for (let i = 0; i < startDay; i++) {
            daysElem.innerHTML += '<div></div>';
        }

        for (let day = 1; day <= totalDays; day++) {
            daysElem.innerHTML += `<div>${day}</div>`;
        }
    }

    renderCalendar(currentYear, currentMonth);

    prevMonthBtn.addEventListener('click', () => {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear -= 1;
        } else {
            currentMonth -= 1;
        }
        renderCalendar(currentYear, currentMonth);
    });

    nextMonthBtn.addEventListener('click', () => {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear += 1;
        } else {
            currentMonth += 1;
        }
        renderCalendar(currentYear, currentMonth);
    });
});
