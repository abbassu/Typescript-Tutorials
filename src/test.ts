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

// type Button={
//     up:string,
//     down:string,
//     left:string,
//     rigth:string,
// }
// type last=Button&{
//     x:boolean
// }
// let fla:Button;
// fla={up:"rrrrr",down:"rrrrrrrrrrr",rigth:"ddddddd",left:"ssss"}
// fla.down="rrrrr1";
// fla.rigth="rrrrr2";
// fla.left="rrrrr3";



// function getAction(btn:Button){
//     console.log(`actoin before button up ${btn.up}`)
//     console.log(`actoin before button down ${btn.down}`)
//     console.log(`actoin before button left ${btn.left}`)
//     console.log(`actoin before button right ${btn.rigth}`)
// }
// function getActionlast(btn:last){
//     console.log(`actoin before button up ${btn.up}`)
//     console.log(`actoin before button down ${btn.down}`)
//     console.log(`actoin before button left ${btn.left}`)
//     console.log(`actoin before button right ${btn.rigth}`)
//     console.log(`actoin xxxxxx ${btn.x}`)

// }
// console.log(getAction({up:"go-up",down:"go-right",left:"go-left",rigth:"go-down"}))
// console.log(getAction(fla))
// console.log(getActionlast({up:"go-up",down:"go-right",left:"go-left",rigth:"go-down",x:true}))



//////////////////////// 14

// type numsss= 0 | 1 | -1;

// function compareAdd(num1:number,num2:number) : 1| -1 | 0 {

//     if(num1===num2){
//         return 1;
//     }
//     else if(num1>num2){
//         return 0;
//     }
//     else{
//         return -1;
//     }
    // return 0;
// }
// console.log(compareAdd(20,20))
// console.log(compareAdd(20,15))
// console.log(compareAdd(15,20))

//////////////////////// 15

// tuple   another sort of array type 
// let article :[number,string,boolean]=[12,"ahmad",true];
// article.push(1000)
// console.log(article)
// -----------------------------------------------------------
// let articlee : readonly [number,string,boolean]=[12,"ahmad",true];
// // articlee.push(123)//error
// console.log(article)

//------------------------------------------------------------

//destructing 
// const [id,name3,b]=article
// console.log(id)
// console.log(name3)
// console.log(b)

//////////////////////// 16
  //void

// function logging(msg:string):string{
//     console.log(msg)
//     return msg;
// }
// console.log(logging("hello"))

// function loggingv(msg:string):void{
//     console.log(msg)
//     return;
// }
// console.log(loggingv("hellov"))

//never

// function alwaysLog(msg:string) :never{
//     while(true){
//         console.log(msg)
//     }
//     // return 55
// }


//////////////////////// 17
// const enum level {
//     Easy=10,
//     medium =12,
//     hard= 13
// }

// let lvl:string = "easy"

// if(lvl==="easy"){
//     console.log(`the level is ${lvl} and number of seconds is ${level.Easy}`)
// }
//////////////////////// 18

function getHardSecond():number {
    return 3;
}


enum kids{
    five =5,
    seven =7,
    ten=10
}


enum level {
    Easy=kids.five,
    medium =getHardSecond(),
    // hard,
}

//////////////////////// 19

// let myImg= document.getElementById("aa") as HTMLInputElement; //// or  <HTMLInputElement> document.getElementById("aa") 
// console.log(myImg.src)


// let data :any =10000;
// console.log(data.)/


//////////////////////// 20


// type A = {
//     one : string,
//     two : number,
//     three : boolean
// }
// type B =A & {
//     four:boolean
// }
// type C = {
//     five : boolean
// }

// type Mix = A&C  ///// intersection 
// function getAction(btn : B){
//     console.log(`hello ${btn.one}`)
//     console.log(`hello ${btn.two}`)
//     console.log(`hello ${btn.three}`)
//     console.log(`hello ${btn.four}`)
// }

// function getActionNow(btn : Mix){

//     console.log(`hello ${btn.one}`)
//     console.log(`hello ${btn.two}`)
//     console.log(`hello ${btn.three}`)
//     console.log(`hello ${btn.five}`)

// }


// getAction({one : "stgin",two : 100,three:true,four:false})

// getActionNow({one : "stgin",two : 100,three:true,five:false})




//////////////////////// 21


// let myObject : {
//     readonly username:string,
//     id:number,
//     hire?:boolean,
//     skill:{
//         one : string,
//         two : string
//     }
// } ={
//     username:"elzero",
//     id : 199,
//     // hire: true,
//     skill: {
//         one : "HTML",
//         two : "CSS"
//     }
// }
// // myObject.username= "Abbas";
// myObject.hire=false

// console.log(myObject.username)
// console.log(myObject.hire)



//////////////////////// 22
// interface like type it is describe shape of objects or elements

// interface User{
//     id?:number,
//     readonly username:string,
//     country:string,
//     sayHello(): string,/// what will back
//     sayWelcome: ()=> string,
//     getDouble(num:number): number
// }

// let user:User ={
//     // id:100,
//     username:"elzero",
//     country:"nablus",
//     sayHello(){
//         return " hello man"
//     },
//     sayWelcome() {
//         return " welcome man"
//     },
//     getDouble(n) {
//         return n *12
//     },
// }
// function getData(data:User){
//     console.log(`user is ${data.username}`)

//     console.log(`user is ${data.country}`)
//     // console.log(`user is ${data.id}`)

// }

// console.log(user.id)
// console.log(user.username)
// console.log(user.country)
// console.log(user.sayHello())
// console.log(user.sayWelcome())
// console.log(user.getDouble(4))

//////////////////////// 24
//////////////// open interface 
/////// home page


// interface settings{
//     theme:boolean,
//     font : string
// }

// /////// articles page
// interface settings{
//     sidebar : boolean
// }

// /////// contact page 
// interface settings{
//     external: boolean
// }

// let userInterface :settings = {
//     theme : true,
//     font : "open sans",
//     sidebar : false,
//     external : true
// }

//////////////////////// 25


// interface User {
//     id :number,
//     username:string,
//     country:string,
// }

// interface Action {
//     protect : string
// }

// interface Modulator extends User,Action {
//     role : string | number
// }


// let user : Modulator  ={
//     id : 100,
//     username: "Elzero",
//     country : "jenin",
//     role : 55,
//     protect:"llll"
// }
// console.log(user.id)


//////////////////////// 26


