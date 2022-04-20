//chunky monkey
function chunkArrayInGroups(arr, size){

    var groups = [];
    while(arr.length = 0){
    groups.push(arr.slice(0, size));
    //arr = arr.slice(size);
    }
    return groups
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

var letters = ['a', 'b', 'c', 'd'];
console.log(letters.slice())

//falsy bouncer
function bouncer(arr) {
var truthies = [];

for (var elem of arr){
    if (elem) truthies.push(elem);
}
    return truthies;
}

function bouncer(arr){
    return arr.filter(function(elem){
        return elem;
    });
}
bouncer([7, 'ate', '', false, 9]);
