
// You should implement your task here.

module.exports = function towelSort (arr) {
  if (arr == undefined) {
    return [];
  }
  let arrNew =[]
 for (let i = 0; i < arr.length; i++) {
   if (i % 2 == 0) {
    arrNew.push(arr[i])
   } else if (i % 2 != 0) {
     arrNew.push(arr[i].reverse());
   }
  }

  return arrNew.flat();
}
