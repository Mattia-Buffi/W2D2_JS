//! M1 - Epicode - JavaScript Extra Training (Marco Longo)

//* ARRAY:
//? Ex.1 (Easy) - Realizzare un programma che costruisca un array di 20 elementi. Ogni elemento dev'essere pari al proprio indice nell'array.
// Es. [0, 1, 2, 3, 4, 5 ... 19]
let serieUno=[];
let numeroElementi=20;
for (let index = 0; index < numeroElementi; index++) {
    serieUno.push(index); 
}
console.log(serieUno);
//? Ex.2 (Medium) - Realizzare un programma che, dato un array di numeri interi, stampi in console la media di tutti i valori.
// N.B. Utilizza solo i concetti visti a lezione, niente scorciatoie!

let serieNumerica=[12,35,46,7,89,54,32,50,5,11,23,4,9];
let totalSum=0;

for (let index = 0; index < serieNumerica.length; index++) {
    totalSum += serieNumerica[index];
    }
console.log(totalSum/serieNumerica.length);

//? Ex.3 (Medium) - Realizzare un programma che rimuova i multipli 
//                  dispari di 3 dall'array riportato sotto.
// N.B. 18 è un multiplo pari di 3, 21 è un multiplo dispari di 3.
let array = [20, 31, 15, 78, 48, 27, 61, 51]; 
console.log(array)
for (let index = 0; index < array.length; index++) {
    if((array[index]%2)===0){
        continue
    } else if((array[index]%3)===0){
        array.splice(index,1);
    } else continue
}
console.log(array)

//? Ex.4 (Hard) - Dato un array di numeri interi (nums) ed un numero intero (target), 
//                  ritornare i 2 indici degli elementi nell’array nums che, sommati, restituiscano il numero target.
//? Assumere che ogni nums fornito in input accetti solo una soluzione e che questo contenga solo numeri diversi fra loro.
// Esempio:
// Input: nums = [4, 9, 11, 13] , target = 22
// Output: [1,3]

// nums [0, 1, 2, 3, 4, 5, 6]
// Suggerimento: Sapevi che i cicli for possono essere innestati?
let nums = [4, 9, 11, 14]
let target = 22
let targetIndex=[]
let finded=false



for (let i = 0; i < nums.length; i++) {
    if(finded) break
    else{
    for (let index = 0; index < nums.length; index++) {
        if (i===index) continue
        else{
            if(target==(nums[i]+nums[index])){
                targetIndex.push(i,index)
                console.log(targetIndex)
                finded=true
                break
            } else continue}  
    } 
    }   
}
if(!finded) console.log('Target no finded')
