function insertionSort (list) {

  for (let i = 1; i < list.length; i++) {
    let valueToInsert = list[i];
    let insertPosition = i;
    while (insertPosition > 0 && list[insertPosition - 1] > valueToInsert) {
      list[insertPosition] = list[insertPosition - 1];
      insertPosition -= 1;
    }
    list[insertPosition] = valueToInsert;
  }
  return list;
}

module.exports = {
  insertionSort
};
