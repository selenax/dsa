var array = [{number:12}, {number:3}, {number:5}, {number:22}]

array.sort((a,b) => a.number - b.number)

console.log(array);


var array = [{fruit:'Tomato'}, {fruit:'Banana'}, {fruit:'Apple'}, {fruit:'Orange'}]

array.sort((a,b) => a.fruit < b.fruit ? - 1 : a.fruit > b.fruit ? 1 : 0)
console.log(array);


var votes = [
	{ title: 'Apple', votes: 1 },
	{ title: 'Milk', votes: 2 },
	{ title: 'Carrot', votes: 3 },
	{ title: 'Banana', votes: 2 }
];

votes.sort(function (vote1, vote2) {

	// Sort by votes
	// If the first item has a higher number, move it down
	// If the first item has a lower number, move it up
	if (vote1.votes > vote2.votes) return -1;
	if (vote1.votes < vote2.votes) return 1;

	// If the votes number is the same between both items, sort alphabetically
	// If the first item comes first in the alphabet, move it up
	// Otherwise move it down
	if (vote1.title > vote2.title) return 1;
	if (vote1.title < vote2.title) return -1;

});

console.log(votes);



// sorting by more than 1 constraint

function compare(a,b) {

  
  if(a[1] === b[1]) {
    console.log(a[0], b[0]);
    return a[0] > b[0] ? 1 : -1;
  } else {
    return a[1] > b[1] ? 1 : -1;
  }
}
