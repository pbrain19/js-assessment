exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var list = str.split(''),
      currentCount,
      last,
      result = [];

    list.forEach(function(item) {
      if(item != last) {
        currentCount = 1;

        //set the item to last
        //add to the result the current item as many times as the amount
        last = item;
        for(var i = 0;  i < amount; i++) {
          result.push(item);
        }
      }
      else {

      }
    });

    return result.join('');

  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {

  }
};
