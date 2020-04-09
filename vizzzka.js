function transformTune(freq, expectedFreq) {
    let t;
    let percent = Math.round(100 * freq / expectedFreq);
    // console.log(percent);
    if (percent === 0) t = '-';
    else if (percent === 100) t = 'OK';
    else if (percent <= 97) t = '>>•';
    else if (percent < 100) t = '>•';
    else if (percent < 103) t = '•<';
    else t = '•<<';
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

