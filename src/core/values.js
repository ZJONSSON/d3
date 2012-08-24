d3.values = function(map) {
  var values = [];
  for (var key in map) {
  	map[key].__key__ = key
  	values.push(map[key]);
  };
  return values;
};
