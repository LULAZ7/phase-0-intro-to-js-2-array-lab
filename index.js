const cats = ['Milo', 'Otis', 'Garfield',];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const newCats = ['Milo','Otis','Garfield'];
    newCats.push(name);
    return newCats;
}
function prependCat(name) {
    const newCats =  ['Milo','Otis','Garfield'];
    newCats.unshift(name);
    return newCats;;
}
const newCats = ['Milo','Otis','Garfield'];
function removeLastCat() {
    newCats.pop();
    return newCats;
}

function removeFirstCat() {
    const newCats =  ['Milo','Otis','Garfield'];
    newCats.shift();
    return newCats;
}
