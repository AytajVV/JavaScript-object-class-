// task1 ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.Hemin function geriye yeni bir array qaytarir. Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
//Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

let num = 0;
let newArr =[];
function Month(arr){
    for (let index = 0; index < arr.length; index++) {
        num++;
        newArr.push(`${arr[index]}-${num}`);
        
    }
    return newArr;
}
console.log(Month(["Yanvar","Fevral","Mart","Aprel"]));