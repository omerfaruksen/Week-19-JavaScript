//Functions end of chapter exercise

let counter=0
let counterDOM=document.querySelector('#counter') //Bilgileri aldik
let increaseDOM=document.querySelector('#increase')
let decreaseDOM=document.querySelector('#decrease')

counterDOM.innerHTML=counter//H3 icerisindeki 100 yazisini artık counter'dan aldik

increaseDOM.addEventListener("click" , clickEvent)//clickEvetn fonksiyonunu burada cagirdik
decreaseDOM.addEventListener("click" , clickEvent)

// function clickEvent(){
//     console.log(this.id)// Burada ID bilgisini aldik
//     if(this.id == increase){
//         counterDOM.innerHTML = counter += 1
//     }else{
//         counterDOM.innerHTML = counter -= 1
//     }
// }

// function clickEvent(){ // Yukarıdaki ( str: 13-20 ) yorum alaninin daha kisa hali
//     console.log(this.id)// Burada ID bilgisini aldik
//     this.id == "increase" ? counterDOM.innerHTML = counter += 1 : counterDOM.innerHTML = counter -= 1 //Ternary uyguladik 
// }

function clickEvent(){ // Yukarıdaki ( str: 22-25 ) yorum alaninin daha kisa hali
    console.log(this.id)// Burada ID bilgisini aldik
    this.id == "increase" ?  counter += 1 : counter -= 1 //Ternary uyguladik
    counterDOM.innerHTML = counter
}