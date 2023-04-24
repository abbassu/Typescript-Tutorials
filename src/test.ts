// let anme :string="abbas";
// let age:number=40;
// let hire :boolean =true


// //// if you dont know the type 

// let all :any ="aaaaaaaaaaa"
// all=100///////////////any data type -> he dosent wait any type

function add(n1:number,n2:number){
    return n1+n2
}

add(10,20)
// add(10,"eeeee")

let all :string|number="eeeee"
all=44

let myadd : string[] = ["osama","ahmad","waleed",10]

for (let f=0;f<myadd.length;f++){
    console.log(myadd[f].repeat(3))
}