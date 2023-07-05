const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name)    
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}
 
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
    const newcats = [...cats]; //creates copy of the cats
    newcats.push(name);//appends the new cat to the new array
    return newcats;//returns the appended new cat .Append = add at the end hence used push
}

function prependCat(name){
    const newcats = [...cats]; //creates copy of the cats
    newcats.unshift(name);//appends the new cat to the new array
    return newcats;//returns the prepended new cat .prependpend = add at the start hence used unshift
}

function removeLastCat(name){
    const newcats = [...cats]; 
    newcats.pop(name);
    return newcats;
}
function removeFirstCat(name){
    const newcats = [...cats]; 
    newcats.shift(name);
    return newcats;
}

