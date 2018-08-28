// Class Carray
var CArray =  function (numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;

    // Phuong thuc

    this.setData = function() {
        for (var i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
        }
    };

    this.clear = function() {
        for (var i = 0; i < this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    };

    this.insert = function(element) {
        this.dataStore[this.pos++] = element;
    };

    this.toString = function() {
        var retstr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retstr += this.dataStore[i] + " ";
            if(i>0 && i%10==0){
                retstr += "\n" +"</br>";
            }
        }
        return retstr;
    };
    // noi bot
    this.bubbleSort = function () {
        var numElements = this.dataStore.length;
        var temp;
        for (var outer = numElements; outer >= 2; --outer) {
            for (var inner = 0; inner <= outer-1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner+1]) {
                    this.swap(this.dataStore, inner, inner+1);
                }
            }
            document.write(this.toString());
        }
    };
    //chon
    this.selectionnSort = function () {
        var min, temp;
        for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
            min = outer;
            for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            this.swap(this.dataStore, outer, min);
            document.write(this.toString());
        }
    };

    // chen
    this.insertionSort = function () { var temp, inner;
        for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner-1];
                --inner;
            }
            this.dataStore[inner] = temp;
            document.write(this.toString());
        }
    };

    this.swap = function(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
};

// Doi Tuong

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
// noi bot
myNums.bubbleSort();
// chon
myNums.insertionSort();

document.write("<br/>");
document.write(myNums.toString());



