onInit();

function onInit() {
    createRowsInMatrix(3, 3);
}

function createRowsInMatrix(rowCount, rowLength) {
    const generalArray = [];
    for (i = 0; i < rowCount; i++) {
        const rowDigit = Array.from({length: rowLength}, () => Math.floor(Math.random() * 2));
        generalArray.push(rowDigit);
    }

    checkForPath(generalArray, rowCount, rowLength);
}

function findPathInExcaption(i, j, generalArray, rowLength) {
    if (i + 1 >= rowLength) {
        if (generalArray[i][j] === generalArray[i][j+1]) {
            /* console.log('good excaption') */;
        }
    } else if (j + 1 >= rowLength) {
        if (generalArray[i][j] === generalArray[i+1][j]) {
            /*  console.log('good excaption'); */
        }
    }
}

function findPathInSubMatrix(i, j, generalArray) {
    console.log(i, j);
    console.log(generalArray);
}

function checkForPossiblePath(i, j, generalArray) {
    const pathAccepted = generalArray[i][j] === generalArray[i][j+1] &&
        generalArray[i][j] === generalArray[i+1][j] &&
        generalArray[i][j] === generalArray[i+0][j+1] &&
        generalArray[i][j] === 0;
    if (pathAccepted) {
        generateRandomPath(i, j, generalArray);
    }
}

function generateRandomPath(i, j, generalArray) {
    const randomRow = generateRandom(i, i + 1),
        randomColumn = generateRandom(j, j + 1);

    generalArray[randomRow][randomColumn] = 1;
}

function generateRandom(min, max, interval) {
    if (typeof(interval)==='undefined') interval = 1;
    var r = Math.floor(Math.random() * (max - min + interval) / interval);
    return r * interval + min;
}

function checkForPath(generalArray, rowCount, rowLength) {
    for (i = 0; i < rowLength; i++) {
        for (j = 0; j < rowCount; j++) {
            if (i + 1 >= rowLength || j + 1 >= rowLength) {
                findPathInExcaption(i, j, generalArray, rowLength);
            } else if (generalArray[i][j] !== 0 &&
                generalArray[i][j+1] !== generalArray[i][j] &&
                generalArray[i+1][j] !== generalArray[i][j] &&
                generalArray[i+1][j+1] !== generalArray[i][j]) {
                findPathInSubMatrix(i, j, generalArray);
            } else {
                checkForPossiblePath(i, j, generalArray);
            }
        }
    }
}

