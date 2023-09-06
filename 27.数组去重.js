
// set




// filter
var arr = ['apple','apps','pear','apple','orange','apps'];
 
console.log(arr)    
  var newArr = arr.filter(function(item,index){
     return arr.indexOf(item) === index;  // 因为indexOf 只能查找到第一个  
  });
 
console.log(newArr); 