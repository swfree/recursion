// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //base cases
  if (typeof obj !== 'object'){
    if (typeof obj === 'string'){
      return '"' + obj + '"';
    }
    return "" + obj;
  }
  if (obj === null){
    return "" + obj;
  }

  //recursive case
  var result = "";
  for (var prop in obj){
    //skips over key/val pairs with undefined or functions
    if(typeof obj[prop] === "undefined" || typeof obj[prop] === "function"){ continue; }

    if(result !== ""){
      result += ","; 
    }
    
    if (Array.isArray(obj)) {
      result += stringifyJSON(obj[prop]);
    } else {
      result += '"' + prop + '"' + ":" + stringifyJSON(obj[prop]);    
    }
  }

  if (Array.isArray(obj)){
    return '[' + result + ']'; 
  } else {
    return '{' + result + '}';
  }
  return result;

};
