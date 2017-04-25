var mergeSortModule = (function () {
    var mergeSort = function (arr) {
        var mid = Math.floor(arr.length / 2);
        var left = arr.slice(0, mid);
        var right = arr.slice(mid, arr.length);

        if (arr.length < 2) {
            return arr;
        }

        return merge(mergeSort(left), mergeSort(right));
    };

    var merge = function (leftArr, rightArr) {
        var result = [];

        while (leftArr.length && rightArr.length) {
            if (leftArr[0] > rightArr[0]) {
                result.push(rightArr.shift())
            } else {
                result.push(leftArr.shift());
            }
        }

        while (leftArr.length) {
            result.push(leftArr.shift())
        }
        while (rightArr.length) {
            result.push(rightArr.shift());
        }

        return result;
    };

    return {
        mergeSort: mergeSort
    }
})();
