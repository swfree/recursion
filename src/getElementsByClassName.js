// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var finalArray = [];

  // use Crockford's walkTheDOM
  var walkTheDOM = function(node) {
      if (node.classList && node.classList.contains(className)) {
          finalArray.push(node);
      }
      node = node.firstChild;
      while (node) {
          walkTheDOM(node);
          node = node.nextSibling;
      }
  };

  walkTheDOM(document.body);
  return finalArray;
};