
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



