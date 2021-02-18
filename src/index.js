exports.min = function min(array) {
    if (!array) return 0;
    let res = array[0];
    array.forEach((item) => {
        res = item < res ? item : res;
    });
    return isNaN(res) ? 0 : res;
};

exports.max = function max(array) {
    if (!array) return 0;
    let res = array[0];
    array.forEach((item) => {
        res = item > res ? item : res;
    });
    return isNaN(res) ? 0 : res;
};

exports.avg = function avg(array) {
    if (!array || array.length == 0) return 0;
    let res = 0;
    res = array.reduce((sum, current) => sum + current);
    res = res / array.length;
    return isNaN(res) ? 0 : res;
};
