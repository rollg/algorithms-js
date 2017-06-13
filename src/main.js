var arr = [2,7,5,43,23,5,8,9,3,5];

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

/*
* Merge sort
* */
visualize(arr, sortedArr, 'Merge Sort', t1MergeSort - t0MergeSort);

/*
* Bubble sort
* */
visualizeBubble(arr, bubbleSortedArr, 'Bubble Sort', t1BubbleSort - t0BubbleSort);
