// By using for loop
console.log("Reverse Array by using for loop");
var numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10];
for (var i = numbers.length - 1; i >= 0; --i)
    console.log(numbers[i]);
// By using while loop
console.log("Reverse Array by using while loop");
var i1 = numbers.length - 1;
while (i1 >= 0) {
    console.log(numbers[i1]);
    --i1;
}
// By using do While loop
console.log("Reverse Array by using do while loop");
var i2 = numbers.length - 1;
do {
    console.log(numbers[i2]);
    --i2;
} while (i2 >= 0);
