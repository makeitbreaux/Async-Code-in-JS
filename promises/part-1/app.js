// Part 1: Number Facts
// 1.
let url = "http://numbersapi.com/56?json/"
let favNumPromise = axios.get(url);
console.log(favNumPromise);

favNumPromise
    .then(data => console.log(data))
    .catch(err => console.log(err))

// 2.
let baseURL = "http://numbersapi.com/1..3,4"
let multiNumPromise = axios.get(baseURL);
console.log(multiNumPromise)

multiNumPromise
    .then(data => console.log(data))
    .catch(err => console.log(err))

// 3.
let fourFavNumFacts = [];
let range;
let num;

for (let i = 1; i < 5; i++) {
  fourFavNumFacts.push(
    axios.get(`http://numbersapi.com/${range}, ${num}/${i}/`)
  );
}

Promise.all(fourFavNumFacts)
  .then(favNumArr => (
    favNumArr.forEach(p => console.log(p.text))
  ))
  .catch(err => console.log(err));