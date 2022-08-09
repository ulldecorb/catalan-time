// CATALAN TIME LOGIC

const actualDate = { hour: 12, minute: 50 };

function dateConverter (date) {
    const { hour, minute } = date;

    let convertedDate = '';

    if (minute>= 55 | minute <= 9) convertedDate = `${hour}${getMinute(minute)}`;
    if (minute>= 10 && minute <= 24) convertedDate = `Un quart${getMinute(minute)} de ${hour + 1}`;
    if (minute>= 25 && minute <= 39) convertedDate = `Dos quarts${getMinute(minute)} de ${hour + 1}`;
    if (minute>= 40 && minute <= 54) convertedDate = `Tres quarts${getMinute(minute)} de ${hour + 1}`;
    if (!minute) convertedDate = `${hour} en punt`;
    return convertedDate;
}

// function resolve 12 - 1 hour loop
// discriminate singular / plural hour and minutes articles

function getMinute ( minute ) {
    const remainder = minute % 15;
    let convertedMinute = '';
    
    if (!remainder) return '';
    if (remainder < 10 ) convertedMinute += ` i ${minute % 15} minuts`;
    if (remainder >= 10 ) convertedMinute += ` menys ${15 - (minute % 15)} minuts`;


    return convertedMinute;
}

// const Minute = getMinute(26)
// Minute //menys 4 minuts

// const catalanDate = dateConverter( actualDate );

// catalanDate // Un quart de 3