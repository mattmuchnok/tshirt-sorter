// Write your solution below:

const tshirtSorter = (arr) => {
    let sArr = []
    let mArr = []
    let lArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 's') {
            sArr.push(arr[i])
        } else if (arr[i] === `m`) {
            mArr.push(arr[i])
        } else if (arr[i] === `l`) {
            lArr.push(arr[i])
        }
    }
    answer = String(sArr.concat(mArr, lArr)).replaceAll(`,`, ``)
    return answer
}

console.log(tshirtSorter('lms'))
console.log(tshirtSorter('smllms'))