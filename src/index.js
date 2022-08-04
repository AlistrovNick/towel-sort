module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return [];
  }
  let sortedArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let index = i % 2 === 0 ? j : matrix[i].length - j - 1;
      sortedArr.push(matrix[i][index]);      
    }
  }
  return sortedArr;
}
