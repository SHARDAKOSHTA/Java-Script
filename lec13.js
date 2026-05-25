// let obj={
//     id:1,
//     firstname:"rahul",
//     lastname:"tiwari",
//     fullname:function(city){
//         console.log(this.firstname+this.lastname+city);
    
//     }
// }
// let  user={
//     id:1,
//     firstname:"om",
//     lastname:"kumar"
// }
// obj.fullname.call(user)
// obj.fullname.call(user,"bhopal")
// obj.fullname.apply(user,["bhopal"])


// let obj={
// id:1,
// name:"om"

// }
// // let user={...obj}
// // let user={obj}
// let user=obj
// user.name="hello"
// console.log(user.name)
// console.log(obj.name)


// let obj={
//     id:1,
//     name:"om",
//     address:{
//         city:"delhi"
//     }
// }
// shallow copy me  ek layer ka data jata hai or dusri layer ka reffrence
// let user={...obj}

// deep copy me pura data copy karta hai
// let user=structuredClone(obj)

// let user={obj}
// user.address.city="goa"
// console.log(user.address.city)
// ;
// console.log(obj.address.city)


let s="js js js"
console.log(s.length);
// console.log(s.split(""));
// console.log(s.toLocaleLowerCase());
// console.log(s.toLocaleUpperCase());
// console.log(s.charAt(0));
// console.log(s.trim());
// console.log(s.includes("s"));
// console.log(s.indexOf("j"));
// console.log(s.replace("js","jsx"));
// console.log(s.replaceAll("js","jsx"));

// console.log(s.split("").reverse().join(""));