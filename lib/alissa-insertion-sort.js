unction insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let currentVal = list[i];
    let dropLocation = i;
    for (let j = i - 1; j >= -1; j--) {
      if (currentVal >= list[j] || j === -1) {
   
        dropLocation = j;
        let removed = list.splice(i, 1);
        list.splice(dropLocation + 1, 0, ...removed);
        break;
      }
    }
  }
  return list;
}