// Implemention of a Binary Search Algorithm that searches a Sorted Array
// for the provided value.
// The Binary Search Algorithm will return the index of value found, or -1 if not found.

const binarySearch = (sortedArray, value) => {
    let left = 0;
    let right = sortedArray.length - 1;

    while(left <= right) {
        const middleIndex = Math.floor((left + right) / 2);
        const middleValue = sortedArray[middleIndex];

        if(middleValue === value) {
            return middleIndex;
        } else if(middleValue < value) {
            left = middleIndex + 1;
        } else {
            right = middleIndex - 1;
        }
    }
    return -1;
}