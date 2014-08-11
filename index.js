var fs = require('fs');

var lists = fs.readdirSync('lists');


var parse = function(txt){
  var lines = txt.split("\n");
  lines.pop();
  var list = lines[0];
  lines = lines.splice(1);

  var dict = {}

  lines.map(function(line){
    dict[line] = true;
  });

  return {
    name:list,
    lines:lines,
    dict:dict
  }
}

var dicts = {};

lists.map(function(file){

  var f = fs.readFileSync('lists/' + file, 'utf8');

  var dict = parse(f);

  dicts[dict.name] = {};

  dicts[dict.name].has= function(word){
    return dict.dict[word] == true;
  }

});




// function(file){
//   var dict = parse(file);
// 
//   return function(word){
// 
//   }
// 
// }
// 

console.log(dicts['tofel'].has('apple'), 'tets');
console.log(dicts['2000'].has('apple'), 'tets');
console.log(dicts['3000'].has('apple'), 'tets');
console.log(dicts['4000'].has('apple'), 'tets');


exports = {
  //dict['cet4'].have('apple')
  //have(['cet6','cet4'])
  // have:function(){}
}














