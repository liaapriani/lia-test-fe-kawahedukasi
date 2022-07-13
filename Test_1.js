let data1 = [1, 1, 1, 2, 2, 4, 1, 1]
let data2 = [2, 1, 2, 2, 2, 8, 1, 1]
let data3 = [3, 3, 3, 3, 2, 4, 1, 1]

const mostFrequent = (arr) => {
    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            maxIndex = i;
        }
    }
    return arr[maxIndex];
}
const countNumber = (arr, num) => arr.filter((item) => item === num).length;

[data1, data2, data3].forEach((arr) => {
    console.log('Total data paling banyak keluar adalah ${mostFrequent(arr)} dengan jumlah ${countNumber(arr, mostFrequent(arr))}')
})
