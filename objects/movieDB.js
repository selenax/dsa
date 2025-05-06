// map, reduce, foreach, floats/strings
const json = [
  {
    MovieDatabase: {
      movie: [
        {
          name: 'The Change-Up',
          genre: 'comedy',
          director: 'David Dobkin',
          Facebook_like: 252,
          price: '252.2',
        },
        {
          name: 'Rise of the Planet of the Apes',
          genre: 'SciFi',
          director: 'Rupert Wyatt',
          Facebook_like: 472,
          //   price: '472',
        },
        {
          name: '30 Minutes or Less',
          genre: 'adventure',
          director: 'Ruben Fleischer',
          Facebook_like: 114,
          price: '-114',
        },
        {
          name: 'Final Destination 5',
          genre: 'Horror',
          director: 'Steven Quale',
          Facebook_like: 241,
          price: '241.1',
        },
      ],
    },
  },
];

// outter array has 1 value

//list directors
function findNames(arr) {
  let result = [];
  //movie array
  let target = arr[0].MovieDatabase.movie;

  // for loop
  //   for (let i = 0; i < target.length; i++) {
  //     if (target[i].hasOwnProperty('director')) {
  //       result.push(target[i].director);
  //     }
  //   }
  //   return result;

  // map
  return target.map((val) => {
    if (val.hasOwnProperty('director')) {
      return val.director;
    }
  });
}
// console.log(findNames(json));

// list total likes
function findLikes(arr) {
  let total = 0;
  let movie = arr[0].MovieDatabase.movie;

  // forEach
  //   movie.forEach((val) => {
  //     if (val.Facebook_like) {
  //       total += val.Facebook_like;
  //     }
  //   });
  //   return total;

  // reduce
  //   return movie.reduce((accum, curr) => {
  //     return (accum += curr.Facebook_like);
  //   }, 0);

  // for loop
  for (let i = 0; i < movie.length; i++) {
    if (movie[i].hasOwnProperty('Facebook_like')) {
      total += movie[i]['Facebook_like'];
    }
  }
  return total;
}
// console.log(findLikes(json));

function findPrice(arr) {
  let total = 0;
  let movie = arr[0].MovieDatabase.movie;

  //map
  //   movie.map((val) => {
  //     if (val.price) {
  //       total += Number(val.price);
  //     }
  //   });
  //   return total.toFixed(2);

  //reduce
  let val = movie.reduce((accum, curr) => {
    //if curr price is missing, return accum at this iteration
    if (curr.price === undefined) {
      return accum;
    }
    return (accum += Number(curr.price));
  }, 0);
  return val.toFixed(2);
}

console.log(findPrice(json));
