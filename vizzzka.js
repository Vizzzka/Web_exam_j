function transformTune(freq, expectedFreq) {
    let t;
    // let percent = freq / expectedFreq;
    let percent = Math.round(100 * freq / expectedFreq);
    console.log(percent);
    if (percent === 0) t = '-';
    else if (percent === 100) t = 'OK';
    else if (percent <= 97) t = '>>•';
    else if (percent < 100) t = '>•';
    else if (percent < 103) t = '•<';
    else t = '•<<';
    console.log(t);
    return t;
}

function tune(arr) {
    let numOfStr = 6;
    let perfectFrequencies = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    let res = [];
    for (let i = 0; i < numOfStr; i++) {
        res[i] = transformTune(arr[i], perfectFrequencies[i]);
    }
    return res;
}

// tune([0, 246.94, 0, 0, 0, 80]) ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]
//tune([329.63, 246.94, 195, 146, 111, 82.41]) ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]
// tune([329.63, 246.94, 196, 146.83, 110, 82.41]) ➞ ["OK", "OK", "OK", "OK", "OK", "OK"]

console.log(tune([0, 246.94, 0, 0, 0, 80]));
console.log(tune([329.63, 246.94, 195, 146, 111, 82.41]));
console.log(tune([329.63, 246.94, 196, 146.83, 110, 82.41]));