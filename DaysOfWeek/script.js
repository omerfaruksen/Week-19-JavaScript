//Days Of Week Switch-Case

let number= prompt("Lütfen 1 ile 7 arassında bir sayı giriniz : ")
let info=document.querySelector('#info')
let text;
let day;

switch(number){
    case "1":
        console.log("Girilen sayı 1 , PAZARTESİ");
        text="Girilen sayı 1 "
        day="PAZARTESİ"
        break;
    case "2":
        console.log("Girilen sayı 2");
        text="Girilen sayı 2, SALI"
        day="SALI"
        break;
    case "3":
        console.log("Girilen sayı 3, ÇARŞAMBA");
        text="Girilen sayı 3"
        day="ÇARŞAMBA"
        break;
    case "4":
        console.log("Girilen sayı 4");
        text="Girilen sayı 4"
        day="PERŞEMBE"
        break;
    case "5":
        console.log("Girilen sayı 5 ");
        text="Girilen sayı 5"
        day="CUMA"
        break;
    case "6":
        console.log("Girilen sayı 6 ");
        text="Girilen sayı 6"
        day="CUMARTESİ"
        break;
    case "7":
        console.log("Girilen sayı 7");
        text="Girilen sayı 7"
        day="PAZAR"
        break;
    default :
        console.log("Lütfen geçerli bir sayı giriniz!!")
}

info.innerHTML=` ${text}  >>> ${day}`