
const store = {
		"book": [
			{ 
				"category": "reference",
				"author": "Nigel Rees",
				"title": "Sayings of the Century",
				"price": 8.95
			},
			{ 
				"category": "fiction",
				"author": "Evelyn Waugh",
				"title": "Sword of Honour",
				"price": 12.99
			},
			{ 
				"category": "fiction",
				"author": "Herman Melville",
				"title": "Moby Dick",
				"isbn": "0-553-21311-3",
				"price": 8.99
			},
			{ 
				"category": "fiction",
				"author": "J. R. R. Tolkien",
				"title": "The Lord of the Rings",
				"isbn": "0-395-19395-8",
				"price": 22.99
			}
		],
		"bicycle": {
			"color": "red",
			"price": 19.95
		}
}
  
function search(obj, path) {

  // split the path by bracket and period. Filter out the empty string left behind by split if ends with [].
  let str = path.split(/[\[\].]+/g).filter(Boolean)

  	// Cache the current object
    let current = obj;

	// For each item in the path, dig into the object
	for (var i = 1; i < str.length; i++) {
		current = current[str[i]];
	}   
	return current
}
console.log(search(store, 'store[book][1]'));
console.log(search(store, 'store.book[0]category'));






