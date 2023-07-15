//Variables
let totalTiempoEspera = 0;
let numeroTurnos = 0;
let turnoElegido = prompt('Ingresar turno')

//Variable para calcular el tiempo de espera en relación al turno
const turnos = [
    { tiempoEspera: 10 },
    { tiempoEspera: 15 },
    { tiempoEspera: 5 },
    { tiempoEspera: 20 },
    { tiempoEspera: 15 },
    { tiempoEspera: 5 },
    { tiempoEspera: 20 },
    { tiempoEspera: 15 },
    { tiempoEspera: 5 },
    { tiempoEspera: 20 },
];


const calcTurnos = turnos.slice(0, turnoElegido)

const getTurnsNums = calcTurnos.map(turno => turno.tiempoEspera)

const getTurns = getTurnsNums.reduce((b, a) => b + a)

alert(`Tiempo promedio espera: ${getTurns} Minutos`)