function sumOfDuplicates(arr) {
    // Object to track occurrences of each number
    let count = {};
    let sum = 0;

    // Iterate through the array and count occurrences
    arr.forEach(num => {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    });

    // Iterate through the count object to sum duplicates
    Object.keys(count).forEach(key => {
        if (count[key] > 1) {
            sum += parseInt(key) * (count[key] - 1); // Summing duplicates
        }
    });

    return sum;
}

// Example usage:
let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumOfDuplicates(arr)); // Output: 40
