function addElementToBeginningOfArray (array, element) {
  var newArray = array.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}