// Merge Sort Algorithm that gets two sorted arrays as an argument.
// Returns a new sorted array by merging two arrays.
function mergeSort(sortedArr1, sortedArr2) {
    let newArray = [];
    let p1 = 0;
    let p2 = 0;

    while(p1 < sortedArr1.length && p2 < sortedArr2) {
        if(sortedArr1[p1] < sortedArr2[p2]) {
            newArray.push(sortedArr1[p1]);
            p1++;
        } else {
            newArray.push(sortedArr2[p2]);
            p2++;
        }
    }

    while(p1 < sortedArr1.length) {
        newArray.push(sortedArr1[p1]);
        p1++;
    }

    while(p2 < sortedArr2.length) {
        newArray.push(sortedArr2[p2]);
        p2++;
    }

    return newArray;
}