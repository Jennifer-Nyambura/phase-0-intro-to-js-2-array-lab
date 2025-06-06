// Write your solution here! 



const cats = ["Milo", "Otis", "Garfield", "Felix"];

function addCat(name) {
  cats.push(name);
  return cats;
}

console.log(addCat("Felix")); // ["Milo", "Otis", "Garfield", "Felix"]
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}
 function appendCat(name) {
  return [...cats, name];
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

