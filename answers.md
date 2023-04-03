Uyga vazifa:

1.Ikkta sonning yig'indisini xisoblovchi function yarating.
2.Uchta parametr ichidan maximum va minumum sonlarni aniqlovchi function yarating
3.Bizda N ta niqob bor A ta odam. N ta niqob A ta odamga nechtadan tushishini hisoblovchi function yarating
4.Ikki honaliy soning birinchi raqamini qaytaruvchi function yarating
5.Ikkita butun son berilgan, ularni o'rnini almashtiruvchi dastur tuzing



{---------1- answer--------------}


let welcome = "Kankulyatorga xush kelibsiz";
alert(welcome);

let a = + prompt("birinchi sonni kiriting");
let b = + prompt("ikkinchi sonni kiriting")
function parent(a,b) {
    let jami = a+b;
    alert(jami);  
}
parent(a,b);

{---------  2- answer --------------}

let a = + prompt("birinchi son");
let b = + prompt("ikkinchi son");
let c = + prompt("uchinchi son");

function maximum(a,b,c) {
    alert (Math.max(a,b,c));
    alert (Math.min(a,b,c));
    
    
    
}

maximum(a,b,c);



{---------  3- answer --------------}


let n = + prompt("niqoblar sonini kiriting");
let people = + prompt("odamlar sonini kiriting");

function niqob(n,people) {
    
    let answer = ( n / people);
    alert("Har bir odamga " + answer +" tadan niqob yetadi" );
    if(n<people){
        alert("odamlarga niqob yetmaydi ")
    }else if (n <= -0 || people<=-0){
        alert("iltimos noldan katta son kiriting")
    }else if (answer==NaN){
        alert("bu yerga harf kiritish mumkin emas")
    }
    
}

niqob(n,people)








