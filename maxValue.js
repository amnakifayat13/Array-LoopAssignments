// By using for loop
console.log("MAximum Value by using for loop");
var array = [45, 12, 85, 86, 79, 100, 150];
var max = 0;
for (var i_1 = 0; i_1 < array.length; i_1++) {
    if (array[i_1] > max) {
        max = array[i_1];
    }
}
console.log(max);
// using while loop
console.log("MAximum Value by using while loop");
var indx1 = 0;
while (indx1 < array.length) {
    if (array[indx1] > max) {
        max = array[indx1];
    }
    ;
    indx1++;
}
console.log(max);
// By using do while loop
console.log("MAximum Value by using do while loop");
var i = 0;
do {
    i++;
} while (i < array.length);
{
    if (array[i] > max) {
        max = array[i];
    }
    ;
}
console.log(max);
