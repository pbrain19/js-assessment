exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var indexFound;
    arr.forEach(function(val, index) {
      if(item === val) {
        indexFound = index;
      }
    });
    return indexFound || -1;
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function(val) {
      total += val;
    });
    return total;
  },

  remove : function(arr, item) {
    var indexFound = [];
    var filtered = [];
    arr.forEach(function(val, index) {
      if(item !== val) {
        filtered.push(val);
      }
    });
    return filtered;
  },

  removeWithoutCopy : function(arr, item) {
    var indexFound = [];
    var toKeep = [];
    var size = arr.length - 1;
    for(i = size; i >= 0; i--) {
      var val = arr[i];
      if(item !== val) {
        toKeep.push(val)
      }
      arr.pop();
    }
    toKeep.forEach(function(val) {
      arr.push(val);
    })
    return arr.reverse();
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    return [item].concat(arr);
  },

  curtail : function(arr) {
    return arr.slice(1, arr.length);
  },

  concat : function(arr1, arr2) {
    var toReturn = [];
    arr1.forEach(function(item) {
      toReturn.push(item);
    });
    arr2.forEach(function(item) {
      toReturn.push(item);
    });
    return toReturn;
  },

  insert : function(arr, item, index) {
    var tempArray = [];
    arr.forEach(function(currentItem, currentIndex) {
      if(currentIndex === index) {
        tempArray.push(item)
      }
      tempArray.push(currentItem)
    });
    return tempArray;
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(currentItem) {
      if(currentItem === item) {
        count++
      }
    });
    return count;
  },

  duplicates : function(arr) {
    var temp = [];
    var scores = {};
    arr.forEach(function(item) {
      if(scores[item] === 1) {
        scores[item] += 1;
        temp.push(item);
      }
      else if(scores[item] > 1) {
        scores[item] += 1;
      }
      else {
        scores[item] = 1;
      }
    });
    return temp;
  },

  square : function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences : function(arr, target) {
    var count = [];
    arr.forEach(function(item, index) {
      if(target === item) {
        count.push(index);
      }
    });
    return count;
  }
};
