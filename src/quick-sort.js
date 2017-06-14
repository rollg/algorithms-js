var quickSortModule = (function (array) {

    var quickSortBasic = function (array) {
        if (array.length < 2) {
            return array;
        }

        var pivot = array[0];
        var lesser = [];
        var greater = [];

        for (var i = 1; i < array.length; i++) {
            if (array[i] > pivot) {
                greater.push(array[i]);
            } else {
                lesser.push(array[i]);
            }
        }

        return Array.prototype.concat(quickSortBasic(lesser), pivot, quickSortBasic(greater));
    };

    var swap = function (array, firstIndex, secondIndex) {
        var temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    };

    var quicksort = function (array, left, right) {
        left = left || 0;
        right = right || array.length - 1;

        // var pivot = partitionLomuto(array, left, right);
        var pivot = partitionHoare(array, left, right);

        if (left < pivot - 1) {
            quicksort(array, left, pivot - 1)
        }
        if (right > pivot) {
            quicksort(array, pivot, right);
        }

        return array;
    };

    function partitionLomuto(array, left, right) {
        var pivot = right;
        var i = left;

        for (var j = left; j < right; j++) {
            if (array[j] <= array[pivot]) {
                swap(array, i, j);
                i = i + 1;
            }
        }
        swap(array, i, j);

        return i;
    }

    function partitionHoare(array, left, right) {
        var pivot = Math.floor((left + right) / 2 );

        while(left <= right) {
            while(array[left] < array[pivot]) {
                left++;
            }
            while(array[right] > array[pivot]) {
                right--;
            }
            if(left <= right) {
                swap(array, left, right);
                left++;
                right--;
            }
        }
        return left;
    }

    return {
        quickSort: quicksort
    }
})();
