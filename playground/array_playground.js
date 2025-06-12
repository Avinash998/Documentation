// Array program 1: 
//WAP to find the count of minimum occerance of common element of both the arrays.
//A = [ '1', '2', '3', '2', '1', '3', '4', '4', '4', '5']
//B = [ '2', '3', '4', '5', '5', '7', '4']
//Output = { "2": 1, "3": 1, "4": 2, "5":1}

let a = [ '1', '2', '3', '2', '1', '3', '4', '4', '4', '5'];
let b = [ '2', '3', '4', '5', '5', '7', '4'];
let opSet = new Set(a.concat(b));
let opSeta = new Set(a);
let opSetb = new Set(b);
let opMapa = {};
let opMapb = {};
let opMap = {};
for(let key of opSet){
  if(!(opSeta.has(key)&&opSetb.has(key))){
    opSet.delete(key)
  }
  else{
    opMap[key] = 0;
    opMapa[key] = 0;
    opMapb[key] = 0;
  }
}
for(let i=0; i<a.length; i++){
  opMapa[a[i]]++;
}
for(let i=0; i<b.length; i++){
  opMapb[b[i]]++;
}
for(let key in opMap){
  if(opMapa[key]<opMapb[key]){
    opMap[key]= opMapa[key]
  }
  else{
    opMap[key] = opMapb[key]
  }
}
console.log(opMap); // { '2': 1, '3': 1, '4': 2, '5': 1 }

//----------------------------------------------------------------------------------------------------------------------------

// wap to convert single dimantional array.
// ip : [1,2,3,[1,2,[3,4,5,[6,7,8]]],5,6]
// op1 : [1,2,3,1,2,3,4,5,6,7,8,5,6];
// op2 : [1, 2, 3, 4, 5, 6, 7, 8]

let ip = [1,2,3,[1,2,[3,4,5,[6,7,8]]],5,6];
let set = new Set(ip.flat(Infinity));
console.log([... set]) // [1, 2, 3, 4, 5, 6, 7, 8]
 
// -------------------------------------------------------------------------------------------------------------------------