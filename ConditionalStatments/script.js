//Working with conditional jobs end-of-chapter exercise

/*
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdır.
AA - 90-100
BA - 85-89
BB - 80-84
CB - 75-79
CC - 70-74
DC - 65-69
DD - 60-64
FD - 50-59
FF 0-49

2- kullanicinin girdigi verinin istedigimiz aralıkta olup olmadigini kontrol et
3- ff bilgisine uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun
4- ff clas bilgisini text-danger, digerlerini ise text-primary olsun 
*/
const SMILE=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
`
const SAD =`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-dizzy" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708m-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708M10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
</svg>
`
let exaGrade= prompt("Puanı Giriniz : ")//prompt ile kullanıcıdan bilgi alıyoruz
let textInfo ; 
let info=document.querySelector('#info') // info tanımladik ve HTML kisminda bulunan #info ile iliskilendirdik

if(exaGrade>=0 && exaGrade<=100){//girilen bilginin istenilen aralikta olup olmadıginin kontrolunun yapilmasi
    textInfo =  SMILE //textInfo bilgisini SMILE ile esitledik
    info.classList.add('text-primary')//info bilsine 'text-primary' clasini ekledik bu sekilde class eklemeleri yapilabilir
    if(exaGrade >= 90){
        textInfo += "AA"//+= kullanarak SMILE bilgisine harf notunu ekledik
    }else if(exaGrade >=85){
        textInfo += "BA"
    }else if(exaGrade >=80){
        textInfo += "BB"
    }else if(exaGrade >=75){
        textInfo += "CB"
    }else if(exaGrade >=70){
        textInfo += "CC"
    }else if(exaGrade >=65){
        textInfo += "DC"
    }else if(exaGrade >=60){
        textInfo += "DD"
    }else if(exaGrade >=50){
        textInfo += "FD"
    }else if(exaGrade <50){
        textInfo = ` ${SAD} FF` // burada ${} icerisinde const SAD cagirdik ve harf notunu ekledik
        info.classList.remove('text-primary')
        info.classList.add('text-danger')//info bilsine 'text-danger' clasini ekledik bu sekilde class eklemeleri yapilabilir
    }
}else{
    textInfo += "Girilen bilgiler doğru değildir."
}


info.innerHTML=` ${textInfo}  >>> ${exaGrade}` // innerHTML kullanarak bilgiyi ekrana yazdirdik