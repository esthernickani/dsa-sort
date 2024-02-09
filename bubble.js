function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1; j ++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
                swapped = true
            }
        }
        if (!swapped) break;
    }

    return arr
}

module.exports = bubbleSort;