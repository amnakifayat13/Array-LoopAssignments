// By using for loop
console.log("By using for loop");
var arr = ["Amna", "Asia", "Farah", "Admin", "Komal"];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Admin") {
        console.log(i);
    }
}
// By using while loop
console.log("By using while loop");
var i1 = 0;
while (i1 < arr.length) {
    if (arr[i1] == "Admin") {
        console.log(i1);
    }
    i1++;
}
// By using do While loop
console.log("By using do while loop");
var i2 = 0;
do {
    if (arr[i2] == "Admin") {
        console.log(i2);
    }
    i2++;
} while (i2 < arr.length);
