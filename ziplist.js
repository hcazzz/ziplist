const listOne = [1, 2, 3, 4];
const listTwo = ['a', 'b', 'c', 'd'];

function zipList(first, second) {
  const newList = [];
  for (let i = 0; i < first.length; i++) {
    newList.push(first[i], second[i]);
  }
  return newList;
}

console.log(zipList(listOne, listTwo));

const zipListTheSimpleWay = (first, second) => _.flatten(_.zip(first, second));

console.log(zipListTheSimpleWay(listOne, listTwo));
