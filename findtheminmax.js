// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr){
    let min = Math.min(...arr)
    // console.log(min)
    let max = Math.max(...arr)
    // console.log(max)
    console.log(`In the array [${arr}]:`)
    console.log(`Minimum/Maximum values:\n[${min}, ${max}]`)
}
minMax([1,2,3,4,5])
minMax([8,56,41,4,9])