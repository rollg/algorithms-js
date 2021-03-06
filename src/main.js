// var arr = [2,7,32132,5,323,43,23,5,8,2345,9,3,5];
var arr = [];
var arrayLength = 10000;
for (var i = 0; i < arrayLength; ++i) {
    arr.push(Math.floor(Math.random() * 1000));
}

var t0MergeSort = performance.now();
var sortedArr = mergeSortModule.mergeSort(arr);
var t1MergeSort = performance.now();

var visualize = function(before, result, method, time) {
    var methodUsedElm = document.getElementsByClassName('method-used')[0];
    var inputValueElm = document.getElementsByClassName('input-value')[0];
    var outputValueElm = document.getElementsByClassName('output-value')[0];
    var timeTakenElm = document.getElementsByClassName('time-taken')[0];

    methodUsedElm.innerHTML = 'Method used: ' + method;
    inputValueElm.innerHTML = 'Input value was: ' + before;
    outputValueElm.innerHTML = 'Result is: ' + result;
    timeTakenElm.innerHTML = 'Time taken: ' + time;
};

var t0BubbleSort = performance.now();
var bubbleSortedArr = bubbleSortModule.bubbleSort(arr);
var t1BubbleSort = performance.now();

var visualizeBubble = function(before, result, method, time) {
    var methodUsedElm = document.getElementsByClassName('bubble-method-used')[0];
    var inputValueElm = document.getElementsByClassName('bubble-input-value')[0];
    var outputValueElm = document.getElementsByClassName('bubble-output-value')[0];
    var timeTakenElm = document.getElementsByClassName('bubble-time-taken')[0];

    methodUsedElm.innerHTML = 'Method used: ' + method;
    inputValueElm.innerHTML = 'Input value was: ' + before;
    outputValueElm.innerHTML = 'Result is: ' + result;
    timeTakenElm.innerHTML = 'Time taken: ' + time;
};

var t0SelectionSort = performance.now();
var selectionSortedArr = selectionSortModule.selectionSort(arr);
var t1SelectionSort = performance.now();

var visualizeSelection = function(before, result, method, time) {
    var methodUsedElm = document.getElementsByClassName('selection-method-used')[0];
    var inputValueElm = document.getElementsByClassName('selection-input-value')[0];
    var outputValueElm = document.getElementsByClassName('selection-output-value')[0];
    var timeTakenElm = document.getElementsByClassName('selection-time-taken')[0];

    methodUsedElm.innerHTML = 'Method used: ' + method;
    inputValueElm.innerHTML = 'Input value was: ' + before;
    outputValueElm.innerHTML = 'Result is: ' + result;
    timeTakenElm.innerHTML = 'Time taken: ' + time;
};

var t0InsertionSort = performance.now();
var insertionSortedArr = insertionSortModule.insertionSort(arr);
var t1InsertionSort = performance.now();

var visualizeInsertion = function(before, result, method, time) {
    var methodUsedElm = document.getElementsByClassName('insertion-method-used')[0];
    var inputValueElm = document.getElementsByClassName('insertion-input-value')[0];
    var outputValueElm = document.getElementsByClassName('insertion-output-value')[0];
    var timeTakenElm = document.getElementsByClassName('insertion-time-taken')[0];

    methodUsedElm.innerHTML = 'Method used: ' + method;
    inputValueElm.innerHTML = 'Input value was: ' + before;
    outputValueElm.innerHTML = 'Result is: ' + result;
    timeTakenElm.innerHTML = 'Time taken: ' + time;
};

var t0QuickSort = performance.now();
var quickSortedArr = quickSortModule.quickSort(arr);
var t1QuickSort = performance.now();

var visualizeQuickSort = function(before, result, method, time) {
    var methodUsedElm = document.getElementsByClassName('quick-method-used')[0];
    var inputValueElm = document.getElementsByClassName('quick-input-value')[0];
    var outputValueElm = document.getElementsByClassName('quick-output-value')[0];
    var timeTakenElm = document.getElementsByClassName('quick-time-taken')[0];

    methodUsedElm.innerHTML = 'Method used: ' + method;
    inputValueElm.innerHTML = 'Input value was: ' + before;
    outputValueElm.innerHTML = 'Result is: ' + result;
    timeTakenElm.innerHTML = 'Time taken: ' + time;
};

/*
* Merge sort
* */
visualize(arr, sortedArr, 'Merge Sort', t1MergeSort - t0MergeSort);

/*
* Bubble sort
* */
visualizeBubble(arr, bubbleSortedArr, 'Bubble Sort', t1BubbleSort - t0BubbleSort);

/*
 * Selection sort
 * */
visualizeSelection(arr, selectionSortedArr, 'Selection Sort', t1SelectionSort - t0SelectionSort);

/*
 * Insertion sort
 * */
visualizeInsertion(arr, insertionSortedArr, 'Insertion Sort', t1InsertionSort - t0InsertionSort);

/*
 * Quick sort
 * */
visualizeQuickSort(arr, quickSortedArr, 'Quick Sort', t1QuickSort - t0QuickSort);

