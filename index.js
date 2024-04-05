// Write your solution here!
// Define the cats variable with an initial value
const cats = ["Milo", "Otis", "Garfield"];

// Now you can use the cats variable in your code
console.log(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
  }
 
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
 
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  function appendCat(name) {
    return cats.concat(name);
  }
  
  function prependCat(name) {
    return [name, ...cats];
  }
  
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  function removeFirstCat() {
    return cats.slice(1);
  }
  