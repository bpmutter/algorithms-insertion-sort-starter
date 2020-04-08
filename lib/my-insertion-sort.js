function myInsertionSort(nums){

    let sorted = nums.slice(0,1);
    let unsorted = nums.slice(1);

    for(i = 1; i < nums.length; i++){
        addElementToSorted(sorted, unsorted);
    }
    nums = sorted;
    return nums;
}

function addElementToSorted(sorted, unsorted){
    const elementToSort = unsorted.shift();
    if(elementToSort<=sorted[0]) sorted.unshift(elementToSort);
    else if(elementToSort>=sorted[sorted.length-1])  sorted.push(elementToSort);
    else{
        for (let j = 1; j <= sorted.length - 1; j++) {
            let sortedLower = sorted[j - 1];
            let sortedUpper = sorted[j];
            if (elementToSort>=sortedLower && elementToSort<=sortedUpper){
                sorted.splice(j, 0, elementToSort);
                return;
            }
        }
    } 
}


let array = [2, 4, 3, -1, 3, -7];
console.log(myInsertionSort(array));

