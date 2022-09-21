

// modulo fecha version 1.1
//  tiene la funcion dameFecha
const dameFecha=() => console.log(new Date() ) 
dameFecha()

// modulo fecha version 2.3
//  tiene la funcion dameFecha


const formatData = (input) => {
    if (input > 9) {
        return input;
    } else return `0${input}`;
};
const dameFecha=() => {
    const date = new Date();
    const format = {
        dd: formatData(date.getDate()),
        mm: formatData(date.getMonth() + 1),
        yyyy: date.getFullYear(),
        HH: formatData(date.getHours()),
        hh: formatData(date.getHours()),
        MM: formatData(date.getMinutes()),
        SS: formatData(date.getSeconds()),
      };
    console.log(`${format.dd}/${format.mm}/${format.yyyy} ${format.HH}:${format.MM}:${format.SS}`);
}
dameFecha()