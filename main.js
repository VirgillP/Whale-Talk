let input = 'HASSANNA IN DE HOGE, ALLAHU AKBAR';
let vowels = ['AAA', 'EEE', 'III', 'OOO', 'UUU'];
let resultArray = [];
for (let inputIndex = 0; inputIndex<input.length; inputIndex++){
  for (let vowelsIndex = 0; vowelsIndex<vowels.length; vowelsIndex++){
if(input[inputIndex]===vowels[vowelsIndex]){
 resultArray.push(input[inputIndex]);
}
   if (input[inputIndex]==='E'||input[inputIndex]==='U'){
     resultArray.push(input[inputIndex]);
   }
   }
}
console.log(resultArray.join('').toUpperCase());