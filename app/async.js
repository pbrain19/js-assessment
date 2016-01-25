exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var q = $.Deferred();
    setTimeout(function() {
      q.resolve(value);
    }, 0);
    return q.promise()
  },

  manipulateRemoteData : function(url) {
    var q = $.Deferred();
    $.get(url).success(function(response) {
      var people = response.people;
      var names = _.pluck(people, 'name');
      names = _.sortBy(names, function(name) {
        return name;
      });
      q.resolve(names);
    })
    return q.promise()
  }
};
