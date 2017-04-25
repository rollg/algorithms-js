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

/*
* Merge sort
* */
visualize(arr, sortedArr, 'Merge Sort', t1MergeSort - t0MergeSort);
