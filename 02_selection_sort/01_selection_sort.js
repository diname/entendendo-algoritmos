function buscaMenor(array) {
  var smallest = array[0]
  var smallestIndex = 0

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i]
      smallestIndex = i
    }
  }
  return smallestIndex
}

function selectionSort(array) {
  var sortedArray = []
  var copyArray = array.slice()

  for (let i = 0; i < array.length; i++) {
    smallest = buscaMenor(copyArray)
    sortedArray.push(copyArray.splice(smallest, 1)[0])
    return sortedArray
  }
}

const sourtedArray = selectionSort([5, 3, 6, 2, 10])
console.log(sourtedArray)
