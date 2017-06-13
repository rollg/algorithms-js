var bubbleSortModule = (function () {
    var swap = function(array, firstIndex, lastIndex) {
        var temp = array[firstIndex];
        array[firstIndex] = array[lastIndex];
        array[lastIndex] = temp;
    };

    var bubbleSortClassic = function (array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = 1; j <array.length; j++) {
                if (array[j - 1] > array[j]) {
                    swap(array, j - 1, j);
                }
            }
        }

        return array;
    };

    var bubbleSort = function (array) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < array; i++) {
                if (array[i] > array[i + 1]) {
                    swap(array, i, i + 1);
                    swapped = true;
                }
            }
        } while(swapped);

        return array;
    };

    return {
        bubbleSort: bubbleSort
    }
})();
