// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  var finalArray = [document.body];
  var childElements = document.body.children;

  for (var i = 0; i < childElements.length; i++){
    if(childElements[i].className === 'targetClassName'){
      finalArray.push(childElements[i]);
    }
  }
  return finalArray;

};
