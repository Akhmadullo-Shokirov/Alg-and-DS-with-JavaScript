// helper function to swap items in an array.
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// bubbleSort works by having sorted data accumulate at the end of array.
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

// bubbleSort works by having sorted data accumulate at the beginning of array.
function selectionSort(arr) {
    for(let j = 0; j < arr.length; j++) {
        let initial = j;
        for(let k = j + 1; k < arr.length; k++) {
            if(arr[initial] > arr[k]) {
                initial = k;
            }
        }
        swap(arr, j, initial);
    }
    return arr;
}

