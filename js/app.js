
// обратные ковычки - метод инторполяции
// (получить - вставить переменные)
document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
    --move-x: ${(e.clientX - window.innerWidth / 2) * -.0005}deg;
    --move-y: ${(e.clientY - window.innerHeight / 2) * -.010}deg;
    `
    })
})