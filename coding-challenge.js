// coding challenge #1

//Data -1
const temps1 = [17, 21, 23];

// Data-2
const temps2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += (` ${arr[i]}°C in ${i + 1} Day ... `);
    }
    console.log('...' + str);
}

printForecast(temps1);
printForecast(temps2);

