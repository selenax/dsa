// accepts 2 arrays, return true if every value in array has it's corresponding value squared in the second array. 
// frequency of values must be the same 
// order doesn't matter

//! O(N)
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    let newArr1 = arr1.sort((a,b) => a - b)
    let newArr2 = arr2.sort((a,b) => a - b)

    for(let i = 0; i < newArr1.length; i++) {
        if(newArr1[i] ** 2 !== newArr2[i]) {
            return false;
        }
    }
    return true
}

//! O(N)
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    let obj = {};

    for(let val of arr1) {
        val = val ** 2;
        obj[val] = ++obj[val] || 1;
    }
    for(let val of arr2) {
        if(obj[val] !== undefined) {
            if(obj[val] === 1) {
                delete obj[val]
            } else {
                obj[val]--
            }
        }
    }
    return Object.keys(obj).length === 0;
 }

//! O(N)
function same(arr1, arr2) {
    let obj1 = {};
    let obj2 = {};

    for(let val of arr1) {
        obj1[val] = ++obj1[val] || 1;
    }

    for(let val of arr2) {
        obj2[val] = ++obj2[val] || 1;
    }

    for(let key in obj1) {
        if(!(key ** 2) in obj2) {
            return false;
        } 
        if(obj2[key ** 2] !== obj1[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1,2,2],[1,2,4]))