let items = new Set([1,2,3,4,5]);
console.log("Value items: ", items);
console.log(items.size);
items.delete(3);
console.log(items.size);
console.log("next delete 3: ", items);
items.clear();
console.log("Next delete all: ", items);

