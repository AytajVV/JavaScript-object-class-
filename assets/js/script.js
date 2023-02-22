// task1 ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.Hemin function geriye yeni bir array qaytarir. Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
//Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

// let num = 0;
// let newArr =[];
// function Month(arr){
//     for (let index = 0; index < arr.length; index++) {
//         num++;
//         newArr.push(`${arr[index]}-${num}`);
        
//     }
//     return newArr;
// }
// console.log(Month(["Yanvar","Fevral","Mart","Aprel"]));


// task2 String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq, hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
//Meselen: Functiona gelen string - "Salam olsun hamiya", hemin functionun qaytardiqi array ise - [5,5,6] olacaq.
let newArr =[];
function Count(str){
    let arr = str.split(" ");
    for (let index = 0; index < arr.length; index++) {
        newArr.push(arr[index].length);
    }
    return newArr;
}
let word = "Salam olsun hamiya";
console.log(Count(word));