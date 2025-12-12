function divide(arr, n) {
    let result = [];
    let current = [];
    let currentSum = 0;

    for (let num of arr) {
        if (currentSum + num <= n) {
            current.push(num);
            currentSum += num;
        } else {
            result.push(current);
            current = [num];
            currentSum = num;
        }
    }

    if (current.length > 0) {
        result.push(current);
    }

    return result;
}
