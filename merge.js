// find the target of the following Array;
// let num=[10,8,9,1,2,4,3,7]
// let target=4
function mergeSort(arr){
    if(arr.legth<=1){
        return arr;
    }
    let middle=Math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return Sorted(mergeSort(left),mergeSort(right))
}
function Sorted(left,right){
    let emptyArray=[]
    while(left.length && right.length){
        //let middle=Math.floor((left+right)/2)
        if(left[0]<right[0]){
            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }

    }
    return emptyArray.concat(left,right)
}

let arr=[10,8,9,1,2,4,3,7]
console.log(arr)

// function binarySearch(left,right){
//     let left=arr.length




//     let target=4
// console.log(Sorted(left,right))

// }



