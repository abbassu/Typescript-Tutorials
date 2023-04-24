// let anme :string="abbas";
// let age:number=40;
// let hire :boolean =true


// //// if you dont know the type 

// let all :any ="aaaaaaaaaaa"
// all=100///////////////any data type -> he dosent wait any type

// function add(n1:number,n2:number){
//     return n1+n2
// }

// add(10,20)
// // add(10,"eeeee")

// let all :string|number="eeeee"
// all=44

// let myadd : string[] = ["osama","ahmad","waleed",10]

// for (let f=0;f<myadd.length;f++){
//     console.log(myadd[f].repeat(3))
// }


///////////////////// 7
// let arrayOne :number[] = [1,2,3,4,5]
// let arrayTwo :string[] = ["abbas","ahmad"]
// let arrayThree :(string|number)[] = [1,2,3,4,"abbas","walled"]
// let arrayFour :(string|number|string[]|boolean[])[] = [1,2,3,4,"abbas","walled",["c","d"],[true,false]]

// let arrayFive :(boolean|string|number|string[])[] = [1,2,3,4,"abbas","walled",["c","d"],true,false]


// //////////////////////// 8

// let show =true
// function showDetails(name: string,age: number,salary: number) :string {
//     let fff=10;
//     if(show){
//         return `hello ${name} age is ${age} ${salary} `
//     }
//     return "100"

// }

// console.log(showDetails("oasa",40,3))

// //////////////////////// 9 

// function showData(name?: string,age?: number,country: string="un"){
//     return `${name}-${age}-${country}`
// }
// console.log(showData(undefined))

//////////////////////// 10

function addAll(...nums:(number)[]  ):number{

    let result:number=0;
    // for(let i=0;i<nums.length;i++){
    //     result+=nums[i]
    // }

    nums.forEach((num)=>result+=num)

    return result

}
console.log("--------------------------")
console.log(addAll(10,20,300,10.5,+true))


//////////////////////// 11


const add = function (num1:number,num2:number):number {
    return num1+num2
}

console.log(add(4,22))

const addArrow =  (num1:number,num2:number):number =>{
    return num1+num2
}

console.log(addArrow(77,22))


//////////////////////// 12

// Data Types/
type st=string
let name1:st="abbas"
name1="ahmad"



type standnum=string |number
let m1:standnum="ddddddd"
m1=55

//////////////////////// 13

type Button={
    up:string,
    down:string,
    left:string,
    rigth:string,
}
type last=Button&{
    x:boolean
}
let fla:Button;
fla={up:"rrrrr",down:"rrrrrrrrrrr",rigth:"ddddddd",left:"ssss"}
fla.down="rrrrr1";
fla.rigth="rrrrr2";
fla.left="rrrrr3";



function getAction(btn:Button){
    console.log(`actoin before button up ${btn.up}`)
    console.log(`actoin before button down ${btn.down}`)
    console.log(`actoin before button left ${btn.left}`)
    console.log(`actoin before button right ${btn.rigth}`)
}
function getActionlast(btn:last){
    console.log(`actoin before button up ${btn.up}`)
    console.log(`actoin before button down ${btn.down}`)
    console.log(`actoin before button left ${btn.left}`)
    console.log(`actoin before button right ${btn.rigth}`)
    console.log(`actoin xxxxxx ${btn.x}`)

}
console.log(getAction({up:"go-up",down:"go-right",left:"go-left",rigth:"go-down"}))
console.log(getAction(fla))
console.log(getActionlast({up:"go-up",down:"go-right",left:"go-left",rigth:"go-down",x:true}))
