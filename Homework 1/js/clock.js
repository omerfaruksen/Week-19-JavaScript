let userName = prompt("Kullanıcı Adınızı Giriniz : ")

let myName=document.querySelector("#myName")
myName.innerHTML=`${userName} `
console.log(userName)
let myClock=document.querySelector("#myClock")
const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
const d = new Date();
let day = weekday[d.getDay()];
myClock.innerHTML=`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} ${day}  `
