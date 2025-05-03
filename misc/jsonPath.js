//Given an object, return the value from the specific path provided

/*
todo:

1. create a copy/cache of the object
2. turn path into array as each value will become the key/indices for our object/array lookup.
3. at each iteration, we check to see if key/indices exist in the object.
4. if it does, cache our current spot in the object to a variable, loop again, and look at the new cached spot for the next key/index
5. if at any point, key/index doesn't exist, return undefined.
6. returning the results at the end of loop means we found our match
*/

const store = {
  book: [
    {
      category: 'reference',
      author: 'Nigel Rees',
      title: 'Sayings of the Century',
      price: 8.95,
    },
    {
      category: 'fiction',
      author: 'Evelyn Waugh',
      title: 'Sword of Honour',
      price: 12.99,
    },
    {
      category: 'fiction',
      author: 'Herman Melville',
      title: 'Moby Dick',
      isbn: '0-553-21311-3',
      price: 8.99,
    },
    {
      category: 'fiction',
      author: 'J. R. R. Tolkien',
      title: 'The Lord of the Rings',
      isbn: '0-395-19395-8',
      price: 22.99,
    },
  ],
  bicycle: {
    color: 'red',
    price: 19.95,
  },
};

var obj = {
  a: [
    {
      b: {
        c: 3,
      },
    },
  ],
};

var obj2 = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

function search(obj, path) {
  let arr = [];

  // if path is string, split it into array
  if (typeof path === 'string') {
    // split the path by bracket and period. Filter out the empty string left behind by split if ends with []
    // (because separator appears at the beginning/end of the string will result in an empty (i.e. zero length) string appearing at the first/last position of the returned array)
    arr = path.split(/[\[\].]+/g).filter(Boolean);
  } else {
    arr = path;
  }

  // Cache the current object
  let current = obj;

  // For each item in the path, dig into the object
  for (var i = 0; i < arr.length; i++) {
    // handle edge case on typeError when lookup in null cache
    try {
      // if doesn't have prop we are looking for, return undefined
      if (!current.hasOwnProperty(arr[i])) return undefined;
      // assign current object location to variable
      current = current[arr[i]];
    } catch {
      return undefined;
    }
  }
  // if loop finishes, it means we found our match
  return current;
}

// console.log(search(store, '[book][1]'));
// /*
// {
// 	category: 'fiction',
// 	author: 'Evelyn Waugh',
// 	title: 'Sword of Honour',
// 	price: 12.99,
// }
//  */
// console.log(search(store, 'book[0][category]')); //reference
// console.log(search(obj, 'a[0].b.c')); //3
// console.log(search(obj, ['a', '0', 'b', 'c'])); //3
// console.log(search(obj, 'a.b.c')); //undefined

// console.log(search(obj2, 'a.b.c')); // 12
// console.log(search(obj2, 'a.b')); // {c: 12, j: false}
// console.log(search(obj2, 'a.b.d')); // undefined
// console.log(search(obj2, 'a.c')); // undefined
// console.log(search(obj2, 'a.b.c.d')); // undefined
// console.log(search(obj2, 'a.b.c.d.e')); // undefined
// console.log(search(obj2, 'a.b.j')); //false
// console.log(search(obj2, 'a.b.j.k')); //undefined
// console.log(search(obj2, 'a.k')); //null

// edge cases
// console.log(search(obj2, 'a.k.j')); // undefined  (throws error looking for j when k is null)

// tip: cache become toString function - hasOwnProperty checks for direct props, returns false on inherited prop
console.log(search(obj2, 'a.toString')); // undefined
