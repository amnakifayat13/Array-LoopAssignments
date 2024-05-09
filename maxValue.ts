// By using for loop
console.log("MAximum Value by using for loop");

let array = [ 45, 12, 85, 86, 79, 100,150];
let max = 0;
for(let i = 0; i < array.length; i++){
    if (array[i] > max){
        max = array[i];

    }
}
console.log(max);
// using while loop
console.log("MAximum Value by using while loop");

let indx1 = 0;
while( indx1 < array.length){
    if(array[indx1] > max){
        max= array[indx1]
    };
    indx1++;
    }
console.log(max);

// By using do while loop
console.log("MAximum Value by using do while loop");

let i = 0;
do {
    
i++
}
    while( i < array.length){
        if(array[i] > max){
           max= array[i]
        };
        
}
console.log(max);

    
    