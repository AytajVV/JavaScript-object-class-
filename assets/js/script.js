// task2 ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.Hemin function geriye yeni bir array qaytarir. Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
//Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

// let num = 0;
// //let newArr =[];
// function Month(arr){
//     for (let index = 0; index < arr.length; index++) {
//         num++;
//         newArr.push(`${arr[index]}-${num}`);
        
//     }
//     return newArr;
// }
// console.log(Month(["Yanvar","Fevral","Mart","Aprel"]));


// // task3 String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq, hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
// //Meselen: Functiona gelen string - "Salam olsun hamiya", hemin functionun qaytardiqi array ise - [5,5,6] olacaq.
// let newArr =[];
// function Count(str){
//     let arr = str.split(" ");
//     for (let index = 0; index < arr.length; index++) {
//         newArr.push(arr[index].length);
//     }
//     return newArr;
// }
// let word = "Salam olsun hamiya";
// console.log(Count(word));


// // task4 Custom bir array classi yaradin. Hemin arrayin find ve push metodu olsun. Taski ishleyib turn in edin.

// class Arr{
//     constructor(){
//         let arr = Object.create(Arr.prototype)
//         Object.defineProperty(arr,"length",{
//             value:0,
//             enumerable:false,
//             writable:true
//         })

//         for (let i in arguments) {
//             arr[i] = arguments[i]
//             arr.length += 1
//           }
//         return arr;
//     }

//     Push(element){
//         this[this.length] = element
//         this.length++;
//         return this.length
//     }

//     Find(cb){
//         for (let i = 0; i < this.length; i++) {
//             if(cb(arr[i])){
//                 return arr[i]
//             }            
//         }
//     }

// }

// let arr = new Arr(6,7,8,9,10);

// arr.Push(1)
// arr.Push(2)
// arr.Push(3)
// arr.Push(4)
// arr.Push(5)

// console.log(arr)

// // console.log(arr.Find(x=>x>3))

let guys = ["Farhad", "Ayaz", "Joseph", "Yusif"];
let girls = ["Aytac", "Lale", "Arzu", "Ayan"];
//const group = [...girls, ...guys, "Ulvi"];
//let girls_copy = [...girls];


girls.push("narmin");
console.log(girls_copy);




function nums(a, b, ...ManyMoreArgs){
    console.log("a:", a );
    console.log("b:", b);
    console.log("others:", ManyMoreArgs );

}

let numbers = [1, 2, 3, 4, 5];
nums(...numbers);