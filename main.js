let inp1 = document.getElementById('inp1');
let btn = document.getElementById('btn');
let youtube = document.getElementById('youtube')
let chatgbt = document.getElementById('chatgbt')
let googleplay = document.getElementById('googleplay')
let maps = document.getElementById('maps')
let dark = document.getElementById('dark')
let light = document.getElementById('light')
let contanier = document.querySelectorAll(".contanier")[0];
let contanier2 = document.querySelectorAll('.contanier2')[0];
let acount = document.getElementById('acount')
let h2 = document.getElementById('h2')
btn.onclick = function(){
    setTimeout(() => {
        inp1.value = '';
    }, 1000);
}
youtube.onclick = function(){
    window.open("https://www.youtube.com/")
}
chatgbt.onclick = function(){
    window.open('https://chatgpt.com/')
}
googleplay.onclick = function(){
    window.open("https://play.google.com/store/games?hl=ar")
}
maps.onclick = function(){
    window.open("https://www.google.com/maps?authuser=0")
}
dark.onclick = function(){
    document.body.style.backgroundColor = '#000'
    contanier.style.backgroundColor ="#444"
    dark.style.display = 'none';
    light.style.display = 'block'
    h2.style.color = '#fff';
    h3.style.color = '#fff';
}
light.onclick = function(){
    document.body.style.background = "#f5f7fb"
    contanier.style.background = "#fffffff5";
    dark.style.display = 'block';
    light.style.display = 'none';
    h2.style.color = '#000';
    h3.style.color = '#000';
}
acount.onclick = function(){
    contanier.style.display = 'none';
    contanier2.style.display = 'flex'
}
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
let btn3 = document.getElementById('btn3');
let h3 = document.getElementById('h3');
function h3text(){
    setTimeout(() => {
        h3.innerText = '';
    }, 1600);
}
btn3.onclick = function(){
    if(inp2.value === ""){
        h3.innerText = 'Please Enter Your Name';
        h3text()
        return;
    }
    if(inp3.value === ""){
        h3.innerText = 'Please Enter Your Age';
        h3text()
        return;
    }
    if(inp4.value === ""){
        h3.innerText = "Please Enter Your Email";
        h3text()
        return;
    }
    if (!inp4.value.includes('@gmail.com')) { 
        h3.innerText = 'Please Enter Valid Email'; 
        h3text(); 
        return; 
    }
    h3.innerText = 'The account has been successfully created';
    h3text();
    saveinputsuser()
}
function saveinputsuser(){
    let save = [
        localStorage.inp2value = inp2.value,
        localStorage.inp3value = inp3.value,
        localStorage.inp4value = inp4.value
    ]
}
window.onload = function(){
    if(localStorage.inp2value != undefined && localStorage.inp2value != ""){
        acount.style.display = 'none';
        h2.innerText = 'Welcome ' + localStorage.inp2value;
    }else{
        acount.style.display = 'block';
        h2.innerText = '';
    }
}
