const inputRangePlan = document.getElementById('input-range-plan');
let monthFreeText = document.querySelectorAll('.month-free-text');

inputRangePlan.addEventListener('change', () => {
    function seleccionarPlan(value) {
        if (value === '1') {
            monthFreeText.forEach((text) => {
                text.classList.add('hidden');
            });
            console.log('monthly');
        } else if (value === '2') {
            monthFreeText.forEach((text) => {
                text.classList.remove('hidden');
            });
            console.log('yearly');
        }
    }
    seleccionarPlan(inputRangePlan.value);
});
